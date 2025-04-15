"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingShapes from "@/components/FloatingShapes"
import PageHeader from "@/components/PageHeader"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const contentRef = useRef(null)
  const missionRef = useRef(null)
  const visionRef = useRef(null)
  const historyRef = useRef(null)

  useGSAP(() => {
    gsap.from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })

    gsap.from([missionRef.current, visionRef.current, historyRef.current], {
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

  return (
    <div className="min-h-screen w-full overflow-hidden">
      <FloatingShapes />

      <PageHeader
        title="About GDG Tezpur University"
        subtitle="Empowering Developers, Building Community"
      />

      <div className="container mx-auto px-4 py-16" ref={contentRef}>
        <div className="max-w-4xl mx-auto text-lg space-y-8">
          <p>
            Google Developer Groups (GDG) Tezpur University is a community of tech enthusiasts, passionate about Google’s developer technologies. From Android and Web development to Google Cloud, Angular, Machine Learning, and beyond — we explore, innovate, and level up our skills through hands-on experience.
          </p>
          <p>
            Our goal is to create a platform where students can learn, collaborate, and grow together through engaging events, comprehensive workshops, and hands-on projects — all while staying at the forefront of technology.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" ref={missionRef}>
              <h3 className="text-2xl font-bold mb-4 text-google-blue">Our Mission</h3>
              <p>
                To foster a thriving developer community at Tezpur University where students can learn, collaborate, and grow together through engaging events, comprehensive workshops, and hands-on projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" ref={visionRef}>
              <h3 className="text-2xl font-bold mb-4 text-google-red">Our Vision</h3>
              <p>
                To build a dynamic tech ecosystem that equips students with the skills to become industry-ready developers and innovators, with the aim of making them capable in tackling real-world challenges.
              </p>
            </div>
          </div>

          <div ref={historyRef}>
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="mb-4">
              Founded in <strong>2023</strong> by a passionate group of students, GDG Tezpur University began with a vision to bring Google technologies to the campus and foster a collaborative environment for aspiring tech enthusiasts.
            </p>
            <p className="mb-4">
              What started as a small initiative has now grown into one of the largest and most active technical communities on campus, with over <strong>900 dedicated members</strong>. Since our inception, we’ve hosted over <strong>20 successful events</strong> on topics like Android Development, Cloud Computing, and Machine Learning.
            </p>
            <p className="mb-4">
              Our workshops are designed to empower students with practical skills, while our hackathons and coding competitions offer real-world challenges that inspire innovation and problem-solving.
            </p>
            <p>
              Today, GDG Tezpur University stands as a beacon of collaboration, learning, and growth — dedicated to connecting like-minded students and helping them thrive in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}