import Image from "next/image";
import {
  Bed,
  Bath,
  SquareIcon,
  User,
  Clock,
  Share2,
  Heart,
  Maximize,
} from "lucide-react";
import { PropertyForEnum } from "@/app/(main)/properties/page";
import { Button } from "./ui/button";
import Link from "next/link";
import { Property } from "@prisma/client";

export default function PropertyListingCard({
  property,
}: {
  property: Property;
}) {
  const propertyForText =
    property.for === PropertyForEnum.rent ? "For Rent" : "For Sale";
  const imgs = JSON.parse(property.imageUrl);
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden my-8">
      <div className="flex flex-col md:flex-row">
        {/* Property Image with Overlay Buttons */}
        <div className="relative md:w-1/4 h-60 md:h-auto">
          <Image
            src={`${imgs[0]}`}
            alt="Property view"
            className="w-full h-full object-cover"
            width={400}
            height={400}
          />
          <div className="absolute bottom-4 left-4 flex space-x-3">
            <button className="bg-white/80 p-2 rounded-full hover:bg-white">
              <Share2 className="w-5 h-5 text-gray-700" />
            </button>
            <button className="bg-white/80 p-2 rounded-full hover:bg-white">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
            <button className="bg-white/80 p-2 rounded-full hover:bg-white">
              <Maximize className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Property Details */}
        <div className="md:w-3/4 px-4 py-2 flex flex-col justify-between">
          <div>
            {/* Top Section */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-medium ${
                    property.for === PropertyForEnum.rent
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {propertyForText}
                </span>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-xl font-bold">₹{property.price}</span>
              </div>
            </div>

            {/* Property Title */}
            <h3 className="text-xl font-bold uppercase text-gray-800 mb-1">
              {property.property_type}
            </h3>
            <p className="text-gray-600 mb-1 truncate">{property.address}</p>

            {/* Property Features */}
            <div className="flex items-center space-x-6 mb-1">
              <div className="flex items-center">
                <Bed className="w-5 h-4 text-gray-700 mr-1" />
                <span className="font-medium">{property.bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-4 text-gray-700 mr-1" />
                <span className="font-medium">{property.bathrooms}</span>
              </div>
              <div className="flex items-center">
                <SquareIcon className="w-5 h-4 text-gray-700 mr-1" />
                <span className="font-medium">{property.sqft} sqft</span>
              </div>
            </div>

            {/* Property Category */}
            <div className="mb-1">
              <p className="text-gray-700 uppercase text-sm font-medium">
                FLATS, RESIDENTIAL
              </p>
            </div>

            {/* Agent Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-4 h-4 text-gray-600 mr-2" />
                <span className="text-gray-700">Meet Rakholiya</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-600 mr-2" />
                <span className="text-gray-700">5 days ago</span>
              </div>
            </div>
          </div>

          {/* Details Button */}
          <Link
            href={`properties/${property.id}`}
            className="mt-2 text-right hidden md:block"
          >
            <Button>Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
