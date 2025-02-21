"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Brain, MessageSquare, Sparkles } from "lucide-react"

export default function AiSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold">AI-Powered Comfort Control</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our advanced AI system acts like a virtual HVAC doctor, constantly monitoring, diagnosing, and optimizing
              your system's performance.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Smart Diagnostics</h3>
                  <p className="text-muted-foreground">Continuous monitoring and early problem detection</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/10">
                  <MessageSquare className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Natural Language Insights</h3>
                  <p className="text-muted-foreground">Clear explanations and recommendations in plain English</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Predictive Maintenance</h3>
                  <p className="text-muted-foreground">AI-driven maintenance schedules and optimization</p>
                </div>
              </div>
            </div>

            <Button className="mt-8">Learn More</Button>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 rounded-3xl neumorphic bg-background overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <Brain className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">AI Analysis</h4>
                      <p className="text-sm text-muted-foreground">Real-time monitoring</p>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <motion.div
                      className="p-4 rounded-xl bg-background/80 neumorphic"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-sm">System Status: Optimal</p>
                      <div className="mt-2 h-2 rounded-full bg-primary/20">
                        <div className="h-full w-[95%] rounded-full bg-primary" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-4 rounded-xl bg-background/80 neumorphic"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-sm">Energy Efficiency</p>
                      <div className="mt-2 h-2 rounded-full bg-secondary/20">
                        <div className="h-full w-[88%] rounded-full bg-secondary" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="p-4 rounded-xl bg-background/80 neumorphic"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <p className="text-sm">Next Maintenance: 3 weeks</p>
                      <div className="mt-2 h-2 rounded-full bg-primary/20">
                        <div className="h-full w-[75%] rounded-full bg-primary" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

