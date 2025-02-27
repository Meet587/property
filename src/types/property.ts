export type Property = {
  _id: string;
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
};

export type PropertyFilters = {
  location?: string;
  type?: string;
  minPrice?: number;
  maxPrice?: number;
};
