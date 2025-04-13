"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingShapes from "@/components/FloatingShapes"
import PageHeader from "@/components/PageHeader"
import ProjectCard from "@/components/ProjectCard"

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const contentRef = useRef(null)

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })

    gsap.from(".project-card", {
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

  const projects = [
    {
      id: 1,
      title: "Campus Navigator",
      description:
        "A mobile app that helps students navigate around the Tezpur University campus with real-time updates and information.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Flutter", "Firebase", "Google Maps API"],
      githubLink: "https://github.com",
      demoLink: "#",
    },
    {
      id: 2,
      title: "TU Event Manager",
      description: "A web application for managing and registering for events happening at Tezpur University.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Google Cloud"],
      githubLink: "https://github.com",
      demoLink: "#",
    },
    {
      id: 3,
      title: "Smart Attendance System",
      description: "An AI-powered attendance system using facial recognition for classrooms.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["TensorFlow", "Python", "Flutter", "Firebase"],
      githubLink: "https://github.com",
      demoLink: null,
    },
    {
      id: 4,
      title: "Study Resource Hub",
      description: "A centralized platform for students to share and access study materials, notes, and resources.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Firebase", "Google Drive API"],
      githubLink: "https://github.com",
      demoLink: "#",
    },
    {
      id: 5,
      title: "Campus Connect",
      description: "A social networking platform specifically designed for Tezpur University students and alumni.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "https://github.com",
      demoLink: null,
    },
    {
      id: 6,
      title: "TU Marketplace",
      description: "An online marketplace for students to buy, sell, or exchange items within the campus community.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Flutter", "Firebase", "Google Pay API"],
      githubLink: "https://github.com",
      demoLink: "#",
    },
  ]

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingShapes />

      <PageHeader title="Projects" subtitle="Innovative solutions built by our community members" />

      <div className="container mx-auto px-4 py-16" ref={contentRef}>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-12 max-w-3xl">
            At GDG Tezpur University, we believe in learning by doing. Our members collaborate on various projects to
            solve real-world problems and gain hands-on experience with Google technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
