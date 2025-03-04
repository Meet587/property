"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SelectDropdown } from "@/components/select-dropdown";
import { Textarea } from "@/components/ui/textarea";
import { Property, PropertyType } from "../data/schema";
import { useState } from "react";
import Image from "next/image";

const propertyTypes = [
  { label: "House", value: "house" },
  { label: "Flat", value: "flat" },
  { label: "Commercial", value: "commercial" },
];

const propertyForOptions = [
  { label: "Rent", value: "rent" },
  { label: "Sale", value: "sale" },
];

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  address: z.string().min(1, { message: "Address is required." }),
  bedrooms: z.string().min(1, { message: "Number of bedrooms is required." }),
  bathrooms: z.string().min(1, { message: "Number of bathrooms is required." }),
  sqft: z.string().min(1, { message: "Square footage is required." }),
  year_built: z.string().min(1, { message: "Year built is required." }),
  price: z.string().min(1, { message: "Price is required." }),
  Description: z.string().min(1, { message: "Description is required." }),
  property_type: z.string().min(1, { message: "Property type is required." }),
  for: z.string().min(1, { message: "Property for (rent/sale) is required." }),
  images: z
    .custom<FileList>()
    .refine((files) => files?.length > 0, "Images are required.")
    .refine(
      (files) => Array.from(files).every((file) => file.size <= MAX_FILE_SIZE),
      "Max file size is 5MB."
    )
    .refine(
      (files) =>
        Array.from(files).every((file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        ),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

type PropertyForm = z.infer<typeof formSchema>;

interface Props {
  currentRow?: Property;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PropertyActionDialog({
  currentRow,
  open,
  onOpenChange,
}: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const isEdit = !!currentRow;

  const form = useForm<PropertyForm>({
    resolver: zodResolver(formSchema),
    defaultValues: isEdit
      ? {
          ...currentRow,
          property_type: currentRow.property_type,
          for: currentRow.for,
        }
      : {
          address: "",
          bedrooms: "",
          bathrooms: "",
          sqft: "",
          year_built: "",
          price: "",
          Description: "",
          property_type: "",
          for: "",
        },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageUrls = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setSelectedImages(imageUrls);
    }
  };

  const onSubmit = async (values: PropertyForm) => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      // Append all form fields
      Object.keys(values).forEach((key) => {
        if (key !== "images") {
          const value = values[key as keyof PropertyForm];
          if (!(value instanceof FileList)) {
            formData.append(key, value as string);
          }
        }
      });

      // Append all images
      if (values.images) {
        Array.from(values.images).forEach((file) => {
          formData.append("images", file);
        });
      }

      const response = await fetch("/api/admin/property", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to create property");

      const data = await response.json();
      toast({
        title: "Success",
        description: "Property created successfully",
      });
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create property",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        form.reset();
        setSelectedImages([]);
        onOpenChange(state);
      }}
    >
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader className="text-left">
          <DialogTitle>
            {isEdit ? "Edit Property" : "Add New Property"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update the property here. "
              : "Create new property here. "}
            Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="-mr-4 h-[26.25rem] w-full py-1 pr-4">
          <Form {...form}>
            <form
              id="property-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 p-0.5"
            >
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Address
                    </FormLabel>
                    <FormControl>
                      <Input className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="property_type"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Type
                    </FormLabel>
                    <SelectDropdown
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select property type"
                      className="col-span-4"
                      items={propertyTypes}
                    />
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="for"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">For</FormLabel>
                    <SelectDropdown
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select purpose"
                      className="col-span-4"
                      items={propertyForOptions}
                    />
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Bedrooms
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bathrooms"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Bathrooms
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sqft"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Square Feet
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year_built"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Year Built
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="Description"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea className="col-span-4" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="images"
                render={({ field: { onChange, ...field } }) => (
                  <FormItem className="grid grid-cols-6 items-center gap-x-4 gap-y-1 space-y-0">
                    <FormLabel className="col-span-2 text-right">
                      Images
                    </FormLabel>
                    <div className="col-span-4">
                      <FormControl>
                        <Input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => {
                            onChange(e.target.files);
                            handleImageChange(e);
                          }}
                          {...{ ...field, value: undefined }}
                        />
                      </FormControl>
                      <div className="mt-2 flex gap-2 flex-wrap">
                        {selectedImages.map((image, index) => (
                          <div key={index} className="relative w-20 h-20">
                            <Image
                              src={image}
                              alt={`Preview ${index + 1}`}
                              fill
                              className="object-cover rounded-md"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <FormMessage className="col-span-4 col-start-3" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </ScrollArea>
        <DialogFooter>
          <Button type="submit" form="property-form" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
