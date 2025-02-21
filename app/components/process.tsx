"use client"

import { motion } from "framer-motion"
import { Smartphone, Upload, Cpu, Check } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    title: "Connect Device",
    description: "Install our smart sensor and connect to your WiFi",
  },
  {
    icon: Upload,
    title: "Sync Data",
    description: "Your HVAC system starts sending real-time data",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our AI begins learning your system's patterns",
  },
  {
    icon: Check,
    title: "Optimize",
    description: "Receive personalized recommendations and insights",
  },
]

export default function Process() {
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
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started with Cool Aid in four simple steps and experience the future of HVAC maintenance.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full neumorphic bg-background flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[calc(100%-32px)] h-[2px] bg-gradient-to-r from-primary/50 to-secondary/50" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

