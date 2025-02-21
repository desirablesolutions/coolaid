"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Cool Aid has completely transformed how I manage my home's HVAC system. The AI insights are incredibly helpful!",
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Managing multiple properties is so much easier with Cool Aid. The predictive maintenance has saved us thousands.",
  },
  {
    name: "Emily Rodriguez",
    role: "Smart Home Enthusiast",
    image: "/placeholder.svg?height=80&width=80",
    content: "The integration with my smart home system is seamless. It's like having an HVAC expert on call 24/7.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of satisfied customers who trust Cool Aid for their HVAC needs.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl neumorphic bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

