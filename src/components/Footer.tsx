
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/agents", label: "Agents" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="text-xl font-bold">Luxury Real Estate</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Your trusted partner in finding luxury properties.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                ISKCON Temple Road, Ahmedabad, India
              </p>
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                +91 1234567890
              </p>
              <p className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                info@luxuryrealestate.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Luxury Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
