import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function PropertyCard({ property }: { property: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Link href={`/properties/${property._id}`}>
        <Image
          src={property.images[0]}
          alt={property.title}
          width={400}
          height={300}
          className="h-60 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{property.title}</h3>
          <p className="text-primary font-bold">₹{property.price.toLocaleString()}</p>
          <p className="text-muted-foreground">{property.location}</p>
        </div>
      </Link>
    </Card>
  );
}