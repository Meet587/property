import dbConnect from "../lib/db";
import Property from "../models/Property";

async function seedDatabase() {
  await dbConnect();

  const properties = [
    {
      title: "Luxury Villa in Ahmedabad",
      price: 25000000,
      location: "ISKCON Cross Road, Ahmedabad",
      description: "Beautiful 5 BHK villa with modern amenities",
      type: "villa",
      bedrooms: 5,
      bathrooms: 6,
      amenities: ["Swimming Pool", "Garden", "Gym"],
      featured: true,
      images: ["/properties/villa1.jpg"],
    },
    // Add more properties
  ];

  await Property.deleteMany({});
  await Property.insertMany(properties);

  console.log("Database seeded successfully");
  process.exit(0);
}

seedDatabase().catch((err) => {
  console.error("Error seeding database:", err);
  process.exit(1);
});
