"use client"

import { motion } from "framer-motion"
import { Brain, BarChart, Shield, Zap, ThermometerSnowflake, Bell, MessageSquare, Wrench } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Diagnostics",
    description: "Advanced AI algorithms diagnose issues before they become problems",
  },
  {
    icon: BarChart,
    title: "Smart Analytics",
    description: "Track performance and energy usage with detailed insights",
  },
  {
    icon: Shield,
    title: "Preventive Care",
    description: "Proactive maintenance recommendations to prevent breakdowns",
  },
  {
    icon: Zap,
    title: "Energy Optimization",
    description: "AI-powered suggestions to reduce energy consumption",
  },
  {
    icon: ThermometerSnowflake,
    title: "Climate Control",
    description: "Perfect temperature balance for maximum comfort",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Real-time notifications for system changes and maintenance",
  },
  {
    icon: MessageSquare,
    title: "24/7 AI Support",
    description: "Instant help and guidance whenever you need it",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    description: "Step-by-step guides for basic maintenance tasks",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">The Perfect Remedy for Your HVAC</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our AI-powered platform provides comprehensive care for your HVAC system, ensuring optimal performance and
            comfort year-round.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-2xl neumorphic bg-background"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5" />
              <feature.icon className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

