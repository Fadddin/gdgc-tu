"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown, ChevronUp, Linkedin, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function PreviousLeads() {
    const [isOpen, setIsOpen] = useState(false)
    const sectionRef = useRef(null)
    const contentRef = useRef(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    // Animation for the section itself (on scroll)
    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const sectionAnim = gsap.from(section, {
            y: 20,
            opacity: 0,
            duration: 0.8,
            paused: true,
        })

        const sectionTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            onEnter: () => sectionAnim.play(),
        })

        return () => {
            sectionTrigger.kill()
        }
    }, [])

    // Animation for the content when dropdown opens/closes
    useEffect(() => {
        const content = contentRef.current
        const cards = cardsRef.current.filter(Boolean)

        if (!content || cards.length === 0) return

        if (isOpen) {
            // First, ensure the content is visible but at 0 opacity
            gsap.set(content, {
                autoAlpha: 0,
                height: "auto",
            })

            // Get the natural height
            const height = content.offsetHeight

            // Set height to 0 before animating
            gsap.set(content, {
                height: 0,
                autoAlpha: 1,
            })

            // Create a timeline for smooth animation
            const tl = gsap.timeline()

            // Animate the container height
            tl.to(content, {
                height,
                duration: 0.4,
                ease: "power2.out",
            })

            // Animate each card with stagger
            tl.fromTo(
                cards,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.05,
                    ease: "power2.out",
                },
                "-=0.2", // Start slightly before the height animation completes
            )
        } else if (content.offsetHeight > 0) {
            // Animate closing
            const tl = gsap.timeline()

            // Fade out cards first
            tl.to(cards, {
                y: -10,
                opacity: 0,
                duration: 0.2,
                stagger: 0.02,
                ease: "power2.in",
            })

            // Then collapse the container
            tl.to(content, {
                height: 0,
                duration: 0.3,
                ease: "power2.inOut",
            })
        }
    }, [isOpen])

    const previousLeads = [
        {
            id: 1,
            name: "Ananya Gupta",
            title: "Lead Organizer (2022-2023)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 2,
            name: "Vikram Reddy",
            title: "Technical Lead (2022-2023)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 3,
            name: "Sanjana Mehta",
            title: "Event Coordinator (2022-2023)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 4,
            name: "Arjun Nair",
            title: "Lead Organizer (2021-2022)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 5,
            name: "Meera Iyer",
            title: "Technical Lead (2021-2022)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 6,
            name: "Rohan Verma",
            title: "Event Coordinator (2021-2022)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 7,
            name: "Aisha Khan",
            title: "Lead Organizer (2020-2021)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 8,
            name: "Karthik Menon",
            title: "Technical Lead (2020-2021)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
        {
            id: 9,
            name: "Divya Sharma",
            title: "Event Coordinator (2020-2021)",
            imageUrl: "/placeholder.svg?height=100&width=100",
            social: {
                linkedin: "#",
                github: "#",
            },
        },
    ]

    return (
        <div ref={sectionRef} className="container mx-auto px-4 pb-16 max-w-6xl">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between bg-white rounded-xl shadow-md p-4 mb-4 transition-colors hover:bg-gray-50"
            >
                <h3 className="text-xl font-bold font-google-sans">Previous Leads</h3>
                {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
            </button>

            <div
                ref={contentRef}
                className="bg-white rounded-xl shadow-md p-6 overflow-hidden"
                style={{
                    height: 0,
                    opacity: 0,
                    visibility: "hidden",
                    display: isOpen ? "block" : "none",
                }}
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
                    {previousLeads.map((lead, index) => (
                        <div
                            key={lead.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="team-card bg-gray-50 rounded-lg p-4 text-center"
                        >
                            <div className="relative h-16 w-16 mx-auto mb-2">
                                <Image
                                    src={lead.imageUrl || "/placeholder.svg"}
                                    alt={lead.name}
                                    fill
                                    className="object-cover rounded-full border-2 border-gray-100"
                                />
                            </div>

                            <h4 className="text-sm font-bold font-google-sans">{lead.name}</h4>
                            <p className="text-gray-500 text-xs mb-2">{lead.title}</p>

                            <div className="flex justify-center space-x-2">
                                <Link href={lead.social.linkedin} className="social-icon text-gray-400 hover:text-google-blue">
                                    <Linkedin className="h-3 w-3" />
                                </Link>
                                <Link href={lead.social.github} className="social-icon text-gray-400 hover:text-google-blue">
                                    <Github className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
