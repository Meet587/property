import { NextResponse } from "next/server";
import Property from "@/models/Property";
import connectDB from "@/lib/db";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 9;

  const query: any = {};
  searchParams.forEach((value, key) => {
    if (key === "minPrice") query.price = { ...query.price, $gte: value };
    if (key === "maxPrice") query.price = { ...query.price, $lte: value };
    if (key === "type") query.type = value;
    if (key === "location") query.location = new RegExp(value, "i");
  });

  const [properties, total] = await Promise.all([
    Property.find(query)
      .skip((page - 1) * limit)
      .limit(limit),
    Property.countDocuments(query),
  ]);

  // return NextResponse.json(
  //   { properties, totalPages },
  //   { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30' } }
  // );

  return NextResponse.json({
    properties,
    totalPages: Math.ceil(total / limit),
  });
}
