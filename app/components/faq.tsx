"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the AI monitoring work?",
    answer:
      "Our AI system continuously analyzes data from your HVAC system, learning its patterns and detecting potential issues before they become problems. It uses advanced algorithms to provide real-time insights and recommendations.",
  },
  {
    question: "Is Cool Aid compatible with my HVAC system?",
    answer:
      "Cool Aid is compatible with most modern HVAC systems. Our smart sensor can be installed on any system manufactured in the last 15 years. During setup, we'll verify compatibility with your specific model.",
  },
  {
    question: "What kind of maintenance recommendations will I receive?",
    answer:
      "You'll receive personalized recommendations based on your system's performance, usage patterns, and environmental conditions. This includes filter changes, cleaning schedules, and preventive maintenance tasks.",
  },
  {
    question: "How much energy can I save with Cool Aid?",
    answer:
      "On average, our users see 15-30% reduction in energy costs within the first three months. The exact savings depend on your current system efficiency and usage patterns.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No, all our plans are month-to-month with no long-term commitment required. You can upgrade, downgrade, or cancel your subscription at any time.",
  },
]

export default function Faq() {
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
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about Cool Aid and our AI-powered HVAC monitoring.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}

