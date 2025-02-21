import Hero from "@/components/hero"
import Features from "@/components/features"
import AiSection from "@/components/ai-section"
import Process from "@/components/process"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import Contact from "@/components/contact"
import AiChatButton from "@/components/ai-chat-button"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-blur" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 gradient-blur" />
      </div>

      <Hero />
      <Features />
      <AiSection />
      <Process />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <AiChatButton />
    </main>
  )
}

