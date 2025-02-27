import { Card, CardContent } from "@/components/ui/card";
import { Building2, Award, Shield, Users } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in luxury real estate services."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through transparency and integrity."
    },
    {
      icon: Users,
      title: "Experience",
      description: "Over 20 years of expertise in luxury property market."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Luxury Real Estate</h1>
          <p className="text-muted-foreground text-lg">
            Your trusted partner in finding exceptional properties that match your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to revolutionize the luxury real estate market, 
            Luxury Real Estate has been at the forefront of providing exceptional 
            property solutions. Our journey began in Ahmedabad, and today we're proud 
            to be one of India's leading real estate agencies.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            We strive to provide unparalleled service in luxury real estate, 
            connecting discerning buyers with exceptional properties while ensuring 
            a seamless and professional experience throughout the journey.
          </p>

          <h2>Our Values</h2>
          <p>
            At Luxury Real Estate, we believe in maintaining the highest standards 
            of integrity, professionalism, and customer service. Our team is 
            committed to understanding and fulfilling our clients' unique needs.
          </p>
        </div>
      </main>
    </div>
  );
}
