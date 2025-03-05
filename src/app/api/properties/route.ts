import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 9;
  const skip = (page - 1) * limit;

  // Build where clause for filtering
  const where: any = {};

  if (searchParams.has("minPrice") || searchParams.has("maxPrice")) {
    where.price = {};
    if (searchParams.has("minPrice")) {
      where.price.gte = parseFloat(searchParams.get("minPrice")!);
    }
    if (searchParams.has("maxPrice")) {
      where.price.lte = parseFloat(searchParams.get("maxPrice")!);
    }
  }

  if (searchParams.has("type")) {
    where.type = searchParams.get("type");
  }

  if (searchParams.has("location")) {
    where.location = {
      contains: searchParams.get("location"),
      mode: 'insensitive'
    };
  }

  try {
    const [properties, total] = await Promise.all([
      prisma.property.findMany({
        where,
        skip,
        take: limit,
      }),
      prisma.property.count({ where })
    ]);
    properties.forEach(pro => {
      const images = JSON.parse(pro.imageUrl) as string[]
      pro.imageUrl = JSON.stringify(images.map(url => process.env.WEB_API_URL + url))
    })
    return NextResponse.json({
      properties,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
