"use client";
import { useParams } from "next/navigation";

export default function propertyDetailsPage() {
    const router = useParams<{id:string}>()
    console.log(router)
  return (
    <div>
      <h1>Property Details Page</h1>
    </div>
  );
}
