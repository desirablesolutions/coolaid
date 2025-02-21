"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions about Cool Aid? Our team is here to help you get started with AI-powered HVAC monitoring.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">support@coolaid.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">1-800-COOL-AID</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="text-muted-foreground">123 Cool Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl neumorphic bg-background">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <Input className="mt-1" placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <Input className="mt-1" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input className="mt-1" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <Textarea className="mt-1" placeholder="Tell us about your HVAC needs..." rows={4} />
                </div>

                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

