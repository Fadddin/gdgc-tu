"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline()

    timeline.from(titleRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    })

    if (subtitleRef.current) {
      timeline.from(
        subtitleRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4",
      )
    }
  }, [])

  return (
    <div className="pt-32 pb-16 bg-gray-50 border-b">
      <div className="container mx-auto px-4 text-center">
        <h1 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 font-google-sans">
          {title}
        </h1>

        {subtitle && (
          <p ref={subtitleRef} className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
