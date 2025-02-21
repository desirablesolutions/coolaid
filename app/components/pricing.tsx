"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic Care",
    price: "9.99",
    description: "Essential monitoring for home comfort",
    features: ["24/7 Basic Monitoring", "Monthly AI Reports", "Email Support", "Mobile App Access"],
  },
  {
    name: "Smart Care",
    price: "19.99",
    description: "Advanced features for optimal performance",
    features: [
      "Everything in Basic Care",
      "Real-time AI Diagnostics",
      "Energy Optimization",
      "Priority Support",
      "Smart Home Integration",
    ],
    popular: true,
  },
  {
    name: "Total Care",
    price: "29.99",
    description: "Complete protection for peace of mind",
    features: [
      "Everything in Smart Care",
      "Predictive Maintenance",
      "24/7 Emergency Support",
      "Extended Warranty Coverage",
      "Quarterly Maintenance Visit",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your HVAC needs. All plans include our AI-powered monitoring system.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative p-6 rounded-2xl neumorphic bg-background ${
                plan.popular ? "border-2 border-primary" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mt-6 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-8" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

