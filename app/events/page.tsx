"use client"

import { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingShapes from "@/components/FloatingShapes"
import PageHeader from "@/components/PageHeader"
import EventCard from "@/components/EventCard"
import Image from "next/image"
import DataLoader from "@/components/DataLoader"

gsap.registerPlugin(ScrollTrigger)

type Event = {
  id: number
  title: string
  date: string
  time: string
  location: string
  image: string
  description: string
  registrationLink: string | null
}

export default function Events() {
  const contentRef = useRef(null)
  const upcomingRef = useRef(null)
  const pastRef = useRef(null)

  const [upcomingEvents, setUpcomingEvents] = useState<Event | any>([])
  const [pastEvents, setPastEvents] = useState<Event | any>([])
  const [eventDetails, setEventdetails] = useState({
    isPastEventsLoading: true,
    isUpcomingEventsLoading: true,
  })

  useGSAP(() => {
    if (!eventDetails.isUpcomingEventsLoading && !eventDetails.isPastEventsLoading) {
      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from([upcomingRef.current, pastRef.current], {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 70%",
        },
      });
    }
  }, { dependencies: [eventDetails.isUpcomingEventsLoading, eventDetails.isPastEventsLoading] });

  const handleUpcommingEvents = async () => {
    try {
      // Fetch upcoming events from the Tezu GDG Community API
      const response = await fetch(
        "https://gdg.community.dev/api/event_slim/for_chapter/2071/?status=Live&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,picture,banner,url,description_short,venue_name"
      );

      // Since there are no upcoming events, I am using an API of some other GDG Community API for testing purpose
      // const response = await fetch(
      //   "https://gdg.community.dev/api/event_slim/for_chapter/287/?status=Live&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,picture,banner,url,description_short,venue_name"
      // );

      const data = await response.json();

      if (!data?.results || !Array.isArray(data.results)) {
        console.error("Unexpected data structure:", data);
        return;
      }

      if (data.count == 0) {
        setEventdetails((prevState) => ({
          ...prevState,
          isUpcomingEventsLoading: false,
        }));
        setUpcomingEvents(null);
        return;
      }

      setEventdetails((prevState) => ({
        ...prevState,
        isUpcomingEventsLoading: false,
      }));

      const allUpcomingEvents = data.results;

      const events: Event = allUpcomingEvents.map((event: any) => ({
        id: event.id,
        title: event.title,
        date: new Date(event.start_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: new Date(event.start_date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        location: event.venue_name || "Virtual (Online)",
        image:
          event.banner || event.picture ||
          "/placeholder.svg?height=200&width=400",
        description: event.description_short || event.description,
        registrationLink: event.url || null,
      }));

      setUpcomingEvents(events);
    } catch (error) {
      console.error("Failed to fetch past events:", error);
    }
  };

  const handlePastEvents = async () => {
    try {
      const response = await fetch(
        "https://gdg.community.dev/api/event_slim/for_chapter/2071/?status=Completed&include_cohosted_events=true&visible_on_parent_chapter_only=true&order=-start_date&fields=title,start_date,event_type_title,picture,url,description_short,venue_name"
      );

      const data = await response.json();

      if (!data?.results || !Array.isArray(data.results)) {
        console.error("Unexpected data structure:", data);
        return;
      }

      if (data.count == 0) {
        setEventdetails((prevState) => ({
          ...prevState,
          isPastEventsLoading: false,
        }));
        setPastEvents(null);
        return;
      }

      setEventdetails((prevState) => ({
        ...prevState,
        isPastEventsLoading: false,
      }));


      const allPastEvents = data.results;

      const events: Event = allPastEvents.map((event: any) => ({
        id: event.id,
        title: event.title,
        date: new Date(event.start_date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: new Date(event.start_date).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        location: event.venue_name || "Virtual (Online)",
        image:
          event.picture ||
          "/placeholder.svg?height=200&width=400",
        description: event.description_short || event.description,
        registrationLink: null,
      }));

      setPastEvents(events);
    } catch (error) {
      console.error("Failed to fetch past events:", error);
    }
  };

  useEffect(() => {
    handleUpcommingEvents()
    handlePastEvents()
  }
    , [])

  // const upcomingEvents = [
  //   {
  //     id: 1,
  //     title: "Industry talk (Speaker)",
  //     date: "April 22, 2025",
  //     time: "...",
  //     location: "...",
  //     image: "/placeholder.svg?height=200&width=400",
  //     description: "Details will be shared Soon ... ",
  //     registrationLink: "#",
  //   },
  //   {
  //     id: 2,
  //     title: "Hackathon",
  //     date: "April 22 - 26, 2025",
  //     time: "...",
  //     location: "...",
  //     image: "/placeholder.svg?height=200&width=400",
  //     description: "Details will be shared Soon ... ",
  //     registrationLink: "#",
  //   },
  //   {
  //     id: 3,
  //     title: "Quiz",
  //     date: "April 23, 2025",
  //     time: "...",
  //     location: "...",
  //     image: "/placeholder.svg?height=200&width=400",
  //     description: "Details will be shared Soon ... ",
  //     registrationLink: "#",
  //   },
  //   {
  //     id: 4,
  //     title: "Industry talk (Speaker)",
  //     date: "April 24, 2025",
  //     time: "...",
  //     location: "...",
  //     image: "/placeholder.svg?height=200&width=400",
  //     description: "Details will be shared Soon ... ",
  //     registrationLink: "#",
  //   },
  //   {
  //     id: 5,
  //     title: "Bug Bounty",
  //     date: "April 25, 2025",
  //     time: "...",
  //     location: "...",
  //     image: "/placeholder.svg?height=200&width=400",
  //     description: "Details will be shared Soon ... ",
  //     registrationLink: "#",
  //   },
  //   {
  //     id: 6,
  //     title: "Zenith 2.O",
  //     date: "...",
  //     time: "...",
  //     location: "...",
  //     image: "/placeholder.svg?height=200&width=400",
  //     description: "Details will be shared Soon ... ",
  //     registrationLink: "#",
  //   }
  // ]

  // const pastEvents = [
  //   {
  //     id: 7,
  //     title: "Off Campus Roadmap",
  //     date: "March 13, 2025",
  //     time: "7:15 PM (IST)",
  //     location: "Dean's Gallery, School of Engineering, Tezpur University",
  //     image: "/Events_2023_24/offCampusRoad.png",
  //     description: "Join us for an insightful session on the off-campus roadmap for tech careers.",
  //     registrationLink: null,
  //   },
  //   {
  //     id: 8,
  //     title: "Build with AI",
  //     date: "March 05, 2025",
  //     time: "7:00 PM (IST)",
  //     location: "Seminar Hall, Computer Science Department, Tezpur University",
  //     image: "/Events_2023_24/buildWithAI1.png",
  //     description: "Learn how to build AI-powered applications using Google Cloud.",
  //     registrationLink: null,
  //   },
  //   {
  //     id: 9,
  //     title: "Tech Winter Break - GDG On Campus - Tezpur University",
  //     date: "December 26, 2024",
  //     time: "6:00 PM (IST)",
  //     location: "Google Meet (Online)",
  //     image: "/Events_2023_24/flutterWork.png",
  //     description: "Introduction to machine learning concepts and TensorFlow.",
  //     registrationLink: null,
  //   },
  //   {
  //     id: 10,
  //     title: "Build With AI",
  //     date: "November 07, 2024",
  //     time: "6:00 PM (IST)",
  //     location: "Tezpur University",
  //     image: "/Events_2023_24/buildWithAI1.png",
  //     description: "Hands-on workshop on Google Cloud Platform.",
  //     registrationLink: null,
  //   },
  //   {
  //     id: 11,
  //     title: "GEN AI Study Jam",
  //     date: "October 05, 2024",
  //     time: "5:30 PM (IST)",
  //     location: "Seminar Hall, Computer Science Department, Tezpur University",
  //     image: "/Events_2023_24/genAIStudyJam.png",
  //     description: "Hands-on workshop on Google Cloud Platform.",
  //     registrationLink: null,
  //   },
  //   {
  //     id: 12,
  //     title: "INFORIA 2.O",
  //     date: "September 23, 2024",
  //     time: "5:45 PM (IST)",
  //     location: "Dean's Gallery, School of Engineering, Tezpur University",
  //     image: "/Events_2023_24/inforia2.jpg",
  //     description: "Hands-on workshop on Google Cloud Platform.",
  //     registrationLink: null,
  //   },

  // ]

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingShapes />

      <PageHeader title="Events" subtitle="Workshops, hackathons, and tech talks to help you grow" />

      <div className="container mx-auto px-4 py-16" ref={contentRef}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16" ref={upcomingRef}>
            <h2 className="text-3xl font-bold mb-8 text-google-blue">Upcoming Events</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents && upcomingEvents.map((event: Event, index: any) => (
                <EventCard key={index} event={event} isUpcoming={true} />
              ))}

              {eventDetails.isUpcomingEventsLoading && (
                <DataLoader />
              )}

              {upcomingEvents == null && (
                <div className="col-span-full text-center text-gray-600 italic py-8">
                  No upcoming events at the moment. Stay tuned for updates!
                </div>
              )}
            </div>
          </div>

          <div ref={pastRef}>
            <h2 className="text-3xl font-bold mb-8 text-google-green">Past Events</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents && pastEvents.map((event: Event, index: any) => (
                <EventCard key={index} event={event} isUpcoming={false} />
              ))}

              {eventDetails.isPastEventsLoading && (
                <DataLoader />
              )}

              {pastEvents == null && (
                <div className="col-span-full text-center text-gray-600 italic py-8">
                  No past events available. Check back later!
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
