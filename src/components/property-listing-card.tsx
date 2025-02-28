import Image from "next/image"
import { Bed, Bath, SquareIcon, User, Clock, Share2, Heart, Maximize } from "lucide-react"
import { PropertyDetailsInterface, PropertyForEnum } from "@/app/properties/page"

export default function PropertyListingCard({ property }: { property: PropertyDetailsInterface }) {
    const propertyForText = property.for === PropertyForEnum.rent ? 'For Rent' : 'For Sale';
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden my-8">
      <div className="flex flex-col md:flex-row">
        {/* Property Image with Overlay Buttons */}
        <div className="relative md:w-1/3 h-60 md:h-auto">
          <Image
            src={`${property.imageUrl}?height=400&width=400`}
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
        <div className="md:w-2/3 p-4 md:p-6 flex flex-col justify-between">
          <div>
            {/* Top Section */}
            <div className="flex justify-between items-start mb-2">
              <div>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${property.for === PropertyForEnum.rent ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
              {propertyForText}
            </span>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-2xl font-bold">₹{property.price}</span>
              </div>
            </div>

            {/* Property Title */}
            <h2 className="text-2xl font-bold uppercase text-gray-800 mb-1">{property.property_type}</h2>
            <p className="text-gray-600 mb-4 truncate">{property.address}</p>

            {/* Property Features */}
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center">
                <Bed className="w-5 h-5 text-gray-700 mr-2" />
                <span className="font-medium">{property.bedrooms}</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-5 h-5 text-gray-700 mr-2" />
                <span className="font-medium">{property.bathrooms}</span>
              </div>
              <div className="flex items-center">
                <SquareIcon className="w-5 h-5 text-gray-700 mr-2" />
                <span className="font-medium">{property.sqft} sqft</span>
              </div>
            </div>

            {/* Property Category */}
            <div className="mb-4">
              <p className="text-gray-700 uppercase text-sm font-medium">FLATS, RESIDENTIAL</p>
            </div>

            {/* Agent Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="w-4 h-4 text-gray-600 mr-2" />
                <span className="text-gray-700">Ravi M. Devaliya</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-600 mr-2" />
                <span className="text-gray-700">5 days ago</span>
              </div>
            </div>
          </div>

          {/* Details Button */}
          <div className="mt-4 text-right hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

