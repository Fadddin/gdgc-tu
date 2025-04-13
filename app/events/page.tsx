"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingShapes from "@/components/FloatingShapes"
import PageHeader from "@/components/PageHeader"
import EventCard from "@/components/EventCard"

gsap.registerPlugin(ScrollTrigger)

export default function Events() {
  const contentRef = useRef(null)
  const upcomingRef = useRef(null)
  const pastRef = useRef(null)

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })

    gsap.from([upcomingRef.current, pastRef.current], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top 70%",
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
      description: "Join us for a day of Flutter development with hands-on workshops and expert talks.",
      registrationLink: "#",
    },
    {
      id: 2,
      title: "Cloud Study Jam",
      date: "June 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Computer Science Department, Tezpur University",
      image: "/placeholder.svg?height=200&width=400",
      description: "Get hands-on experience with Google Cloud Platform and earn certificates.",
      registrationLink: "#",
    },
  ]

  const pastEvents = [
    {
      id: 3,
      title: "Android Dev Days",
      date: "March 10, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Central Auditorium, Tezpur University",
      image: "/placeholder.svg?height=200&width=400",
      description: "A full day of Android development workshops and networking.",
      registrationLink: null,
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      date: "February 20, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Computer Science Department, Tezpur University",
      image: "/placeholder.svg?height=200&width=400",
      description: "Intensive bootcamp covering modern web development technologies.",
      registrationLink: null,
    },
    {
      id: 5,
      title: "Machine Learning Workshop",
      date: "January 15, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Central Library, Tezpur University",
      image: "/placeholder.svg?height=200&width=400",
      description: "Introduction to machine learning concepts and TensorFlow.",
      registrationLink: null,
    },
  ]

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingShapes />

      <PageHeader title="Events" subtitle="Workshops, hackathons, and tech talks to help you grow" />

      <div className="container mx-auto px-4 py-16" ref={contentRef}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16" ref={upcomingRef}>
            <h2 className="text-3xl font-bold mb-8 text-google-blue">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} isUpcoming={true} />
              ))}
            </div>
          </div>

          <div ref={pastRef}>
            <h2 className="text-3xl font-bold mb-8 text-google-green">Past Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} isUpcoming={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
