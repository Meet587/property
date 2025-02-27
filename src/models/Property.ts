import mongoose, { Document, Schema } from "mongoose";

export interface IProperty extends Document {
  title: string;
  price: number;
  location: string;
  description: string;
  type: "house" | "apartment" | "villa";
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  featured: boolean;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const PropertySchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ["house", "apartment", "villa"],
      required: true,
    },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    amenities: [{ type: String }],
    featured: { type: Boolean, default: false },
    images: [{ type: String }],
  },
  { timestamps: true }
);

// Add indexes for better query performance
PropertySchema.index({ location: "text", title: "text" });
PropertySchema.index({ price: 1 });
PropertySchema.index({ type: 1 });

export default mongoose.models.Property<IProperty> ||
  mongoose.model<IProperty>("Property", PropertySchema);
