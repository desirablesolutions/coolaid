import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Award,
  Shield,
  Trophy,
  Star,
  Users,
  Building2,
  Car,
  Cpu,
  Thermometer,
  Zap,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const certifications = [
  { name: "Energy Star", image: "/placeholder.svg?height=48&width=48", icon: Star },
  { name: "ISO 9001", image: "/placeholder.svg?height=48&width=48", icon: Shield },
  { name: "HVAC Excellence", image: "/placeholder.svg?height=48&width=48", icon: Award },
]

const partners = [
  { name: "Tesla", image: "/placeholder.svg?height=48&width=48", icon: Car },
  { name: "Nest", image: "/placeholder.svg?height=48&width=48", icon: Thermometer },
  { name: "Samsung", image: "/placeholder.svg?height=48&width=48", icon: Cpu },
]

const awards = [
  { name: "Best HVAC Solution 2024", image: "/placeholder.svg?height=48&width=48", icon: Trophy },
  { name: "Innovation Award", image: "/placeholder.svg?height=48&width=48", icon: Zap },
  { name: "Service Excellence", image: "/placeholder.svg?height=48&width=48", icon: Users },
]

const memberships = [
  { name: "ASHRAE", image: "/placeholder.svg?height=48&width=48", icon: Building2 },
  { name: "ACCA", image: "/placeholder.svg?height=48&width=48", icon: Shield },
  { name: "PHCC", image: "/placeholder.svg?height=48&width=48", icon: Shield }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const renderLogos = (items: any[]) => (
    <div className="flex flex-wrap gap-4">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          <div className="w-12 h-12 bg-background rounded-lg shadow-md flex items-center justify-center border hover:border-primary transition-colors">
            {item.image ? (
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-lg"
              />
            ) : (
              <item.icon className="h-6 w-6 text-primary" />
            )}
          </div>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-popover rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rotate-45 rounded-lg flex items-center justify-center">
                <div className="w-6 h-1.5 bg-white rounded-full rotate-90" />
                <div className="w-6 h-1.5 bg-white rounded-full absolute" />
              </div>
              <span className="font-bold text-xl">Cool Aid</span>
            </div>
            <p className="text-muted-foreground">
              Revolutionary AI-powered HVAC solutions for homes, businesses, and vehicles.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">1-800-COOL-AID</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">support@coolaid.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">123 Cool Street, Tech City</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Home HVAC
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Commercial HVAC
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Vehicle Climate Control
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Smart Integration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  AI Monitoring
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Preventive Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners and Certifications */}
        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Certifications</h4>
              {renderLogos(certifications)}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Partners</h4>
              {renderLogos(partners)}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Awards</h4>
              {renderLogos(awards)}
            </div>
            <div>
              <h4 className="font-semibold mb-4">Memberships</h4>
              {renderLogos(memberships)}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">© {currentYear} Cool Aid. All rights reserved.</div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="hover:text-foreground">
                Cookies
              </Link>
              <Link href="#" className="hover:text-foreground">
                Licenses
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

