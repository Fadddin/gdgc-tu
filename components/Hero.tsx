"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const logoRef = useRef(null)
  const headingOneRef = useRef(null)
  const headingTwoRef = useRef(null)
  const buttonRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline()

    timeline.from(logoRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
    })

    timeline.from(
      headingOneRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4",
    )

    timeline.from(
      headingTwoRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4",
    )

    timeline.from(
      buttonRef.current,
      {
        y: 20,
        opacity: 0,
        duration: 0.8,
      },
      "-=0.4",
    )
  }, [])

  const scrollToInsights = () => {
    const insightsSection = document.getElementById("insights")
    if (insightsSection) {
      insightsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="flex justify-center mb-6">
          <div ref={logoRef} className="relative h-24 w-24 md:h-32 md:w-32">
            <Image src="/logo.png?height=128&width=128" alt="GDG Logo" width={128} height={128} />
          </div>
        </div>

        <h1 ref={headingOneRef} className="text-4xl md:text-6xl font-bold mb-4 font-google-sans">
          <span className="text-google-blue">Google</span> <span className="text-google-red">Developer</span>{" "}
          <span className="text-google-yellow">Groups</span>
        </h1>

        <h2 ref={headingTwoRef} className="text-2xl md:text-4xl font-medium text-gray-600 mb-8 font-google-sans">
          Tezpur University
        </h2>

        <div ref={buttonRef} className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/about"
            className="bg-google-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            Learn More
          </Link>

          <Link
            href="/events"
            className="bg-white text-google-blue border border-google-blue px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            Upcoming Events
          </Link>
        </div>

        <button
          onClick={scrollToInsights}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-indicator"
        >
          <ChevronDown className="h-10 w-10 text-gray-400" />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 hero-gradient"></div>
    </div>
  )
}
