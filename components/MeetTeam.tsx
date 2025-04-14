"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Facebook, Twitter, Linkedin, Github } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function MeetTeam() {
  const headingRef = useRef(null)
  const cardsRef = useRef([])

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

    cardsRef.current.forEach((card, index) => {
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
        },
      })
    })
  }, [])

  // const leads = [
  //   {
  //     id: 1,
  //     name: "Abhradeep Dey",
  //     title: "Lead Organizer",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Technology is best when it brings people together.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Fardin Khan Rahman",
  //     title: "Technical Lead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Code is like humor. When you have to explain it, it's bad.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: "Debashish Bordoloi",
  //     title: "Progremming co-lead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "The best way to predict the future is to create it.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: "Debashish Bhuyan",
  //     title: "Management-colead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Design is not just what it looks like, it's how it works.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 5,
  //     name: "Abhradeep Dey",
  //     title: "Lead Organizer",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Technology is best when it brings people together.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 6,
  //     name: "Fardin Khan Rahman",
  //     title: "Technical Lead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Code is like humor. When you have to explain it, it's bad.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 7,
  //     name: "Debashish Bordoloi",
  //     title: "Progremming co-lead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "The best way to predict the future is to create it.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 8,
  //     name: "Debashish Bhuyan",
  //     title: "Management-colead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Design is not just what it looks like, it's how it works.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 9,
  //     name: "Fardin Khan Rahman",
  //     title: "Technical Lead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Code is like humor. When you have to explain it, it's bad.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 10,
  //     name: "Debashish Bordoloi",
  //     title: "Progremming co-lead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "The best way to predict the future is to create it.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  //   {
  //     id: 11,
  //     name: "Debashish Bhuyan",
  //     title: "Management-colead",
  //     imageUrl: "/placeholder.svg?height=150&width=150",
  //     quote: "Design is not just what it looks like, it's how it works.",
  //     social: {
  //       linkedin: "#",
  //       twitter: "#",
  //       github: "#",
  //       facebook: "#",
  //     },
  //   },
  // ]

const leads = [
    {
      id: "1",
      name: "Abhradeep Dey",
      imageUrl: "/GDGC2025/Abhradeep_Dey.jpeg",
      title: "GDG Lead",
      quote: "Dream big. Start small. Act now.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "2",
      name: "Fardin Khan Rahman",
      imageUrl: "GDGC2025/Fardin_Khan_Rahman.jpeg",
      title: "Technical Lead",
      quote: "Sometimes you just have to create your own sunshine.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "3",
      name: "Afrid Ahmed",
      imageUrl: "/GDGC2025/Afrid_Ahmed.jpeg",
      title: "Management Lead",
      quote: "Life is better when you’re laughing.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "4",
      name: "Himadree Changmai",
      imageUrl: "/GDGC2025/Himadree_Changmai.jpeg",
      title: "Content Lead",
      quote: "The best way to predict the future is to create it.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "5",
      name: "Sanyukta Phukan",
      imageUrl: "/GDGC2025/Sanyukta_Phukan.jpeg",
      title: "Design Lead",
      quote: "Collect moments, not things.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "6",
      name: "Umananda Siddha",
      imageUrl: "GDGC2025/Umananda_Siddha.jpeg",
      title: "Development Co-Lead",
      quote: "Adventure awaits those who dare.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "7",
      name: "Debashish Bordoloi",
      imageUrl: "/GDGC2025/Debashish_Bordoloi.jpeg",
      title: "Programming Co-Lead",
      quote: "In a world where you can be anything, be kind.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "8",
      name: "Shreyansh Dubey",
      imageUrl: "/GDGC2025/Shreyansh_Dubey.jpeg",
      title: "PR & Sponsorships Lead",
      quote: "Be a voice, not an echo.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "9",
      name: "Debasish Bhuyan",
      imageUrl: "/GDGC2025/Debashish_Bhuyan.jpeg",
      title: "Management Co-Lead",
      quote: "I do diplomacy.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },
    {
      id: "10",
      name: "Harsh Kumar",
      imageUrl: "GDGC2025/Harsh_Kumar.jpeg",
      title: "Programming Co-Lead",
      quote: "Happiness is not by chance, but by choice.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    },{
      id: "11",
      name: "Ritap Dey",
      imageUrl: "/GDGC2025/Ritap_Dey.jpeg",
      title: "Development Co-Lead",
      quote: "We don't remember days, we remember moments.",
      social: {
              linkedin: "#",
              twitter: "#",
              github: "#",
              facebook: "#",
            },
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold text-center mb-16 font-google-sans">
          Meet the Leads
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {leads.map((lead, index) => (
            <div
              key={lead.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="team-card bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="relative h-32 w-32 mx-auto mb-6">
                  <Image
                    src={lead.imageUrl || "/placeholder.svg"}
                    alt={lead.name}
                    fill
                    className="object-cover rounded-full border-4 border-gray-100"
                  />
                </div>

                <h3 className="text-xl font-bold mb-1 font-google-sans">{lead.name}</h3>
                <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">{lead.title}</p>

                <p className="text-gray-600 italic mb-6">"{lead.quote}"</p>

                <div className="flex justify-center space-x-4">
                  <Link href={lead.social.facebook} className="social-icon text-gray-400 hover:text-google-blue">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href={lead.social.twitter} className="social-icon text-gray-400 hover:text-google-blue">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href={lead.social.linkedin} className="social-icon text-gray-400 hover:text-google-blue">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={lead.social.github} className="social-icon text-gray-400 hover:text-google-blue">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
