import { Card } from '@/components/ui/card';
import { BathIcon, BedDoubleIcon, Calendar, Calendar1, Calendar1Icon, ShowerHeadIcon, TriangleRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export enum PropertyForEnum {
  rent = 'rent',
  sale = 'sale',
}

export enum PropertyTypeEnum {
  house = 'house',
  flat = 'flat',
  commercial = 'commercial',
}

interface PropertyDetailsInterface {
  id: number;
  property_type: PropertyTypeEnum;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  year_built: number;
  for: PropertyForEnum;
  price: string;
  imageUrl: string;
  Description: string;
}

export default function PropertyCard({ property }: { property: PropertyDetailsInterface }) {
  const propertyForText = property.for === PropertyForEnum.rent ? 'For Rent' : 'For Sale';
  return (
    <Link href={`/properties/${property.id}`}>
      <Card className="w-full hover:scale-105 transition-all ease-in-out flex flex-col sm:flex-row my-4">
        <div className="relative h-64 sm:h-48 w-full sm:w-2/5 bg-gray-100 overflow-hidden">
          <Image src={property.imageUrl} fill alt={property.address} className="object-cover rounded-l-md sm:rounded-l-md rounded-t-md" />
        </div>
        <div className="p-4 w-full sm:w-3/5">
          <div className="flex justify-between items-center mb-2 ">
            <h3 className="text-lg font-bold capitalize">{property.property_type}</h3>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${property.for === PropertyForEnum.rent ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
              {propertyForText}
            </span>
          </div>
          <p className="text-gray-600 mb-2 text-sm truncate">{property.address}</p>
          <p className="text-blue-600 font-semibold">${property.price}</p>
          <div className="grid grid-cols-3 gap-2 mt-2 text-sm">
            <span className="flex items-center gap-1"><BedDoubleIcon className='h-5 w-5 text-slate-400' /> {property.bedrooms}</span>
            <span className="flex items-center gap-1"><BathIcon className='h-5 w-5 text-slate-400' /> {property.bathrooms}</span>
            <span className="flex items-center gap-1 text-nowrap"><TriangleRight className='h-5 w-5 text-slate-400' /> {property.sqft} sqft</span>
            {/* <span className="flex items-center gap-1"><Calendar className='h-5 w-5 text-slate-400' /> {property.year_built}</span> */}
          </div>
        </div>
      </Card>
    </Link>
  );
}