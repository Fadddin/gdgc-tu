"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Events() {
  const headingRef = useRef(null)
  const eventsRef = useRef(null)
  const buttonRef = useRef(null)

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

    gsap.from(eventsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: eventsRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    })

    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 90%",
        end: "top 70%",
        scrub: 1,
      },
    })
  }, [])

  const upcomingEvents = [
    {
      id: 1,
      title: "Flutter Forward Extended",
      date: "May 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Central Auditorium, Tezpur University",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Cloud Study Jam",
      date: "June 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Science Department, Tezpur University",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-center mb-6 font-google-sans">
          Upcoming Events
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Join us for exciting workshops, hackathons, and tech talks to enhance your skills and connect with fellow
          developers.
        </p>

        <div ref={eventsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
            >
              <div className="relative h-48">
                <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-google-sans">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link
                  href={`/events#event-${event.id}`}
                  className="inline-flex items-center text-google-blue font-medium hover:underline"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div ref={buttonRef} className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center bg-google-blue text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            View All Events
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
