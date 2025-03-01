import PropertyListingCard from "@/components/property-listing-card";
import PropertyCard from "@/components/PropertyCard";

export enum PropertyForEnum  {
    rent = 'rent',
    sale = 'sale',
}

export enum PropertyTypeEnum {
    house = 'house',
    flat = 'flat',
    commercial = 'commercial',
}

export interface PropertyDetailsInterface {
    id: number;
    property_type: PropertyTypeEnum;
    address: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    year_built: number;
    for: PropertyForEnum;
    price: string;
    imageUrl: string,
    Description: string;
}

export default function PropertiesPage() {
    const propertyData:PropertyDetailsInterface[] = [
        { 
            id: 1, 
            property_type: PropertyTypeEnum.flat, 
            address: 'Naroda, Asarva Taluka, Ahmedabad, Gujarat, 382325, India' ,
            bedrooms: 2,
            bathrooms: 2,
            sqft:103,
            year_built: 2024,
            for: PropertyForEnum.rent,
            price: '15K/M',
            imageUrl:'/hero.png',
            Description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobo"
        },
        { 
            id: 2, 
            property_type: PropertyTypeEnum.house, 
            address: 'Bapunagar, Asarva Taluka, Ahmedabad, Gujarat, 382326, India' ,
            bedrooms: 3,
            bathrooms: 3,
            sqft:1023,
            year_built: 2010,
            for: PropertyForEnum.sale,
            price: '1.2 Cr',
            imageUrl:'/hero.png',
            Description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobo"
        },
        { 
            id: 3, 
            property_type: PropertyTypeEnum.commercial, 
            address: 'Shahibaug, Asarva Taluka, Ahmedabad, Gujarat, 382327, India' ,
            bedrooms: 0,
            bathrooms: 1,
            sqft:203,
            year_built: 2015,
            for: PropertyForEnum.rent,
            price: '25K/M',
            imageUrl:'/hero.png',
            Description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobo"
        },
        { 
            id: 4, 
            property_type: PropertyTypeEnum.flat, 
            address: 'Vatva, Asarva Taluka, Ahmedabad, Gujarat, 382328, India' ,
            bedrooms: 1,
            bathrooms: 1,
            sqft:503,
            year_built: 2020,
            for: PropertyForEnum.sale,
            price: '50 Lac',
            imageUrl:'/hero.png',
            Description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobo"
        },

    ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 md:px-12 py-12">
        <h1 className="text-3xl font-bold mb-8 uppercase text-center text-gray-600">Properties</h1>
        {/* {propertyData.map(p=>(
            <PropertyCard key={p.id} property={p} />          
        ))} */}
        {propertyData.map(p=>(
            <PropertyListingCard key={p.id} property={p} />          
        ))}
      </main>
    </div>
  );
}
