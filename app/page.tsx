"use client"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "@/components/Hero"
import ClubInsights from "@/components/ClubInsights"
import Events from "@/components/Events"
import MeetTeam from "@/components/MeetTeam"
import Newsletter from "@/components/Newsletter"
import FloatingShapes from "@/components/FloatingShapes"
import PreviousLeads from "@/components/PreviosLeads"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useGSAP(() => {
    // Initialize any global animations here
    gsap.to(".scroll-indicator", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    })
  }, [])

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingShapes />

      {/* Hero Section */}
      <Hero />

      {/* Club Insights Section */}
      <section id="insights" className="w-full">
        <ClubInsights />
      </section>

      {/* Events Section */}
      <section id="events" className="w-full">
        <Events />
      </section>

      {/* Meet Team Section */}
      <section id="team" className="w-full">
        <MeetTeam />
      </section>

      {/* Previous Leads Section */}
      <section id="previous-leads" className="w-full bg-gray-50 pt-4">
        <PreviousLeads />
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="w-full">
        <Newsletter />
      </section>
    </div>
  )
}
