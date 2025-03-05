import Image from "next/image";
import {
  Bed,
  Bath,
  ArrowUp,
  Maximize,
  Heart,
  Plus,
  Expand,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@prisma/client";

const PropertyFeaturCard = ({ property }: { property: Property }) => {
  const imgs = JSON.parse(property.imageUrl);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <Image
          src={imgs[0]}
          alt="Modern apartment with living room"
          width={400}
          height={250}
          className="w-full h-[220px] object-cover"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-gray-800 text-white text-xs px-2 py-1 uppercase">
            FOR {property.for}
          </span>
          <span className="bg-red-500 text-white text-xs px-2 py-1">
            HOT OFFER
          </span>
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
            <Expand className="w-4 h-4 text-gray-700" />
          </button>
          <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
            <Heart className="w-4 h-4 text-gray-700" />
          </button>
          <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
            <Plus className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 uppercase mb-1">
          APARTMENT, RESIDENTIAL
        </div>
        <div className="text-xl font-medium mb-3">
          ₹{property.price} thousand/mo
        </div>

        <h3 className="text-lg font-bold uppercase mb-2">
          {property.property_type}
        </h3>
        <p className="text-sm text-gray-500 mb-3 truncate">
          {property.address}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Call
          </Button>
          <Button
            variant="outline"
            className="w-12 h-10 flex items-center justify-center text-green-500 border-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.6 6.32A7.85 7.85 0 0 0 12.1 4c-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.8 1 4l-1.1 4 4.1-1.1c1.2.7 2.5 1 3.8 1 4.3 0 7.8-3.5 7.8-7.8 0-2.1-.8-4-2.2-5.5zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.1-.2c-.6-1.1-1-2.3-1-3.5 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.7-2.9 6.5-6.5 6.5zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.3 0-.7-.3-1.3-.7-1.8-1.3-.1-.2.1-.1.3-.5.1-.2 0-.3 0-.4-.1-.1-.4-1-.6-1.3-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1 1.5 2.4 2.1.9.4 1.2.4 1.6.3.3 0 .9-.3 1-.7.1-.3.1-.6.1-.7-.1-.1-.2-.1-.4-.2z" />
            </svg>
          </Button>
          <Button
            variant="outline"
            className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export async function PropertyGrid() {
  const res = await fetch("http://localhost:3000/api/properties");
  const data = await res.json();
  const properties = data.properties;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Property 1 - Apartment */}
        {properties.map((prop: Property) => {
          return <PropertyFeaturCard key={prop.id} property={prop} />;
        })}

        {/* Property 2 - Villa */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Luxury villa with pool"
              width={400}
              height={250}
              className="w-full h-[220px] object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-gray-800 text-white text-xs px-2 py-1">
                FOR SALE
              </span>
              <span className="bg-red-500 text-white text-xs px-2 py-1">
                HOT OFFER
              </span>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Expand className="w-4 h-4 text-gray-700" />
              </button>
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Heart className="w-4 h-4 text-gray-700" />
              </button>
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-500 uppercase mb-1">
              APARTMENT, BUNGLOWS, RESIDENTIAL
            </div>
            <div className="text-xl font-medium mb-3">₹1 crore/mo</div>

            <h3 className="text-lg font-bold uppercase mb-2">VILLA</h3>
            <p className="text-sm text-gray-500 mb-3 truncate">
              Naroda, Asarva Taluka, Ahmedabad, Gujarat
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize className="w-4 h-4" />
                <span>103 sqft</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </Button>
              <Button
                variant="outline"
                className="w-12 h-10 flex items-center justify-center text-green-500 border-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.1 4c-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.8 1 4l-1.1 4 4.1-1.1c1.2.7 2.5 1 3.8 1 4.3 0 7.8-3.5 7.8-7.8 0-2.1-.8-4-2.2-5.5zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.1-.2c-.6-1.1-1-2.3-1-3.5 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.7-2.9 6.5-6.5 6.5zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.3 0-.7-.3-1.3-.7-1.8-1.3-.1-.2.1-.1.3-.5.1-.2 0-.3 0-.4-.1-.1-.4-1-.6-1.3-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1 1.5 2.4 2.1.9.4 1.2.4 1.6.3.3 0 .9-.3 1-.7.1-.3.1-.6.1-.7-.1-.1-.2-.1-.4-.2z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email
              </Button>
            </div>
          </div>
        </div>

        {/* Property 3 - Flats */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="City view of flats"
              width={400}
              height={250}
              className="w-full h-[220px] object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-gray-800 text-white text-xs px-2 py-1">
                FOR RENT
              </span>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Expand className="w-4 h-4 text-gray-700" />
              </button>
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Heart className="w-4 h-4 text-gray-700" />
              </button>
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-500 uppercase mb-1">
              FLATS, RESIDENTIAL
            </div>
            <div className="text-xl font-medium mb-3">₹15 thousand/mo</div>

            <h3 className="text-lg font-bold uppercase mb-2">FLATS</h3>
            <p className="text-sm text-gray-500 mb-3 truncate">
              Naroda, Asarva Taluka, Ahmedabad, Gujarat
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize className="w-4 h-4" />
                <span>103 sqft</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </Button>
              <Button
                variant="outline"
                className="w-12 h-10 flex items-center justify-center text-green-500 border-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.1 4c-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.8 1 4l-1.1 4 4.1-1.1c1.2.7 2.5 1 3.8 1 4.3 0 7.8-3.5 7.8-7.8 0-2.1-.8-4-2.2-5.5zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.1-.2c-.6-1.1-1-2.3-1-3.5 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.7-2.9 6.5-6.5 6.5zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.3 0-.7-.3-1.3-.7-1.8-1.3-.1-.2.1-.1.3-.5.1-.2 0-.3 0-.4-.1-.1-.4-1-.6-1.3-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1 1.5 2.4 2.1.9.4 1.2.4 1.6.3.3 0 .9-.3 1-.7.1-.3.1-.6.1-.7-.1-.1-.2-.1-.4-.2z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email
              </Button>
            </div>
          </div>
        </div>

        {/* Property 4 - Godown */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Commercial godown"
              width={400}
              height={250}
              className="w-full h-[220px] object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-gray-800 text-white text-xs px-2 py-1">
                FOR SALE
              </span>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Expand className="w-4 h-4 text-gray-700" />
              </button>
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Heart className="w-4 h-4 text-gray-700" />
              </button>
              <button className="bg-white/80 p-2 rounded-full hover:bg-white transition">
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="p-4">
            <div className="text-xs text-gray-500 uppercase mb-1">
              GODOWN, COMMERCIAL
            </div>
            <div className="text-xl font-medium mb-3">₹25 lakh/mo</div>

            <h3 className="text-lg font-bold uppercase mb-2">GODOWN</h3>
            <p className="text-sm text-gray-500 mb-3 truncate">
              Naroda, Asarva Taluka, Ahmedabad, Gujarat
            </p>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>2</span>
              </div>
              <div className="flex items-center gap-1">
                <Maximize className="w-4 h-4" />
                <span>103 sqft</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Call
              </Button>
              <Button
                variant="outline"
                className="w-12 h-10 flex items-center justify-center text-green-500 border-green-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.6 6.32A7.85 7.85 0 0 0 12.1 4c-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.8 1 4l-1.1 4 4.1-1.1c1.2.7 2.5 1 3.8 1 4.3 0 7.8-3.5 7.8-7.8 0-2.1-.8-4-2.2-5.5zm-5.5 11.9c-1.2 0-2.3-.3-3.3-.9l-.2-.1-2.4.6.6-2.3-.1-.2c-.6-1.1-1-2.3-1-3.5 0-3.6 2.9-6.5 6.5-6.5 1.7 0 3.3.7 4.5 1.9s1.9 2.8 1.9 4.5c0 3.7-2.9 6.5-6.5 6.5zm3.5-4.8c-.2-.1-1.1-.6-1.3-.6-.2-.1-.3-.1-.4.1-.1.2-.5.6-.6.8-.1.1-.2.1-.3 0-.7-.3-1.3-.7-1.8-1.3-.1-.2.1-.1.3-.5.1-.2 0-.3 0-.4-.1-.1-.4-1-.6-1.3-.2-.4-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.3-.2.2-.6.6-.6 1.5s.6 1.7.7 1.8c.1.1 1 1.5 2.4 2.1.9.4 1.2.4 1.6.3.3 0 .9-.3 1-.7.1-.3.1-.6.1-.7-.1-.1-.2-.1-.4-.2z" />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-1 text-blue-500 border-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          className="px-8 py-2 text-blue-500 border-blue-500"
        >
          Load More
        </Button>
      </div>
    </>
  );
}

export default async function FeaturedProperties() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-2">
          WELCOME TO GHARJOVO
        </h1>
        <p className="text-lg text-gray-600">
          Discover, Buy, and Invest with Confidence
        </p>
      </header>
      <PropertyGrid />
      <button className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors">
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
