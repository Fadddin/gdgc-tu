"use client"

import { useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import CountUp from "react-countup"
import CircleAnimation from "./CircleAnimation"

gsap.registerPlugin(ScrollTrigger)

export default function ClubInsights() {
  const headingRef = useRef(null)
  const cardOneRef = useRef(null)
  const cardTwoRef = useRef(null)
  const cardThreeRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    })

    const cards = [cardOneRef.current, cardTwoRef.current, cardThreeRef.current]

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          scrub: 1,
          onEnter: () => setStartCount(true),
        },
      })
    })
  }, [])

  const insights = [
    {
      ref: cardOneRef,
      count: 900,
      title: "Active Members",
    },
    {
      ref: cardTwoRef,
      count: 20,
      title: "Total Events",
    },
    {
      ref: cardThreeRef,
      count: 200,
      title: "Total Registrations",
    },
  ]

  return (
    <div className="py-20 insights-gradient">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-center mb-16 font-google-sans">
          Club Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {insights.map((insight, index) => (
            <div
              key={index}
              ref={insight.ref}
              className="bg-white rounded-xl shadow-lg p-8 text-center transform transition-transform hover:scale-105 duration-300"
            >
              <div className="flex justify-center mb-6">
                <CircleAnimation />
              </div>

              <h3 className="text-4xl md:text-5xl font-bold mb-4 font-google-sans">
                {startCount ? (
                  <>
                    <CountUp start={0} end={insight.count} duration={2.5} />+
                  </>
                ) : (
                  "0+"
                )}
              </h3>

              <p className="text-xl text-gray-600 font-google-sans">{insight.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
