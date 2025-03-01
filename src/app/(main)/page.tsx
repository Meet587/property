'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: "Dream Homes | Find Your Perfect Property",
//   description: "Discover premium properties in Ahmedabad with Dream Homes",
//   openGraph: {
//     images: [{ url: "/og-image.jpg" }],
//   },
//   keywords: ["real estate", "Ahmedabad properties", "luxury homes"],
// };


import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';
import PropertyCard from '@/components/PropertyCard';
import { Property, PropertyFilters } from '@/types/property';
import Pagination from '@/components/Pagination';

async function fetchProperties(page: number, filters: PropertyFilters) {
  const params = new URLSearchParams({
    // page: page.toString(),
    // ...filters
  });
  const response = await fetch(`/api/properties?${params}`);
  if (!response.ok) throw new Error('Failed to fetch properties');
  return response.json();
}

export function PropertyGrid({ page, filters }: { page: number; filters: PropertyFilters }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['properties', page, filters],
    queryFn: () => fetchProperties(page, filters),
    // keepPreviousData: true
  });

  if (error) return <div className="text-center text-red-500">Error loading properties</div>;

  if (isLoading) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} className="h-[350px] rounded-lg" />
      ))}
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.properties.map((property: Property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={data.totalPages} onPageChange={()=>{}} />
    </>
  );
}

export default function Home() {
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
            <p className="text-xl">Discover premium properties across Ahmedabad</p>
            <Button asChild size="lg">
              <Link href="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* <FeaturedProperties /> */}
    </main>
  );
}