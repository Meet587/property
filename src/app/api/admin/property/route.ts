import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import crypto from "crypto";

import { PrismaClient, PropertyFor, PropertyType } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const images = formData.getAll("images") as File[];
        const imageUrls: string[] = [];

        // Create property_photos directory if it doesn't exist
        const publicDir = join(process.cwd(), "public", "property_photos");

        // Process and save each image
        for (const image of images) {
            // Generate unique filename
            const bytes = crypto.randomBytes(16);
            const uniqueSuffix = bytes.toString("hex");
            const extension = image.name.split(".").pop();
            const filename = `property_${uniqueSuffix}.${extension}`;

            // Convert image to buffer
            const bytes_data = await image.arrayBuffer();
            const buffer = Buffer.from(bytes_data);

            // Save image to public directory
            const filepath = join(publicDir, filename);
            await writeFile(filepath, buffer);

            // Generate URL for the image
            const imageUrl = `/property_photos/${filename}`;
            imageUrls.push(imageUrl);
        }

        // Create property record in database
        const property = await prisma.property.create({
            data: {
                address: formData.get("address") as string,
                bedrooms: parseInt(formData.get("bedrooms") as string),
                bathrooms: parseInt(formData.get("bathrooms") as string),
                sqft: parseInt(formData.get("sqft") as string),
                year_built: parseInt(formData.get("year_built") as string),
                price: (formData.get("price") as string),
                Description: formData.get("Description") as string,
                property_type: formData.get("property_type") as PropertyType,
                for: formData.get("for") as PropertyFor,
                imageUrl: JSON.stringify(imageUrls),
            },
        });

        return NextResponse.json(property, { status: 201 });
    } catch (error) {
        console.error("Error creating property:", error);
        return NextResponse.json(
            { error: "Failed to create property" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const properties = await prisma.property.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(properties);
    } catch (error) {
        console.error("Error fetching properties:", error);
        return NextResponse.json(
            { error: "Failed to fetch properties" },
            { status: 500 }
        );
    }
}
