"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Zap, ThermometerSnowflake } from "lucide-react"
import { AnimatedAcUnit } from "@/components/animated-ac-unit"

export default function Hero() {
  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Your HVAC's
              <br />
              <span className="text-secondary">First Aid</span> Kit
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The first AI-powered platform that monitors, diagnoses, and helps maintain your HVAC system. Just like a
              doctor for your home comfort.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </motion.div>
          </div>
          <div className="flex-1">
     <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square max-w-[500px] mx-auto relative">
                <div className="absolute inset-0 rounded-3xl neumorphic bg-background overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />

                  <motion.div
                    className="absolute top-1/4 left-1/4 p-6 rounded-2xl bg-background/90 neumorphic floating"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <Activity className="h-8 w-8 text-primary" />
                    <p className="mt-2 font-semibold">System Health</p>
                    <p className="text-sm text-muted-foreground">98% Optimal</p>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-1/4 p-6 rounded-2xl bg-background/90 neumorphic floating"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <Zap className="h-8 w-8 text-secondary" />
                    <p className="mt-2 font-semibold">Energy Savings</p>
                    <p className="text-sm text-muted-foreground">23% This Month</p>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/4 left-1/3 p-6 rounded-2xl bg-background/90 neumorphic floating"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                  >
                    <ThermometerSnowflake className="h-8 w-8 text-primary" />
                    <p className="mt-2 font-semibold">Temperature</p>
                    <p className="text-sm text-muted-foreground">Perfect Balance</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
       
          </div>
        </div>
      </div>
    </section>
  )
}

