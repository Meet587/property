import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dream Homes | Find Your Perfect Property",
  description: "Discover premium properties in Ahmedabad with Dream Homes",
  openGraph: {
    images: [{ url: "/og-image.jpg" }],
  },
  keywords: ["real estate", "Ahmedabad properties", "luxury homes"],
};

import { Skeleton } from "@/components/ui/skeleton";
import PropertyCard from "@/components/PropertyCard";
import FeaturedProperties from "@/components/feature";

export default async function Home() {
  return (
    <main>
      <section className="relative h-[600px]">
        <Image
          src="/hero.png"
          alt="Luxury Property"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white space-y-6">
            <h1 className="text-5xl font-bold">Find Your Dream Home</h1>
            <p className="text-xl">
              Discover premium properties across Ahmedabad
            </p>
            <Button asChild size="lg">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
      <FeaturedProperties />
    </main>
  );
}
