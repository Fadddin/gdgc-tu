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

      <PageHeader title="About GDG Tezpur University" subtitle="Learn more about our community and mission" />

      <div className="container mx-auto px-4 py-16" ref={contentRef}>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            Google Developer Groups (GDG) Tezpur University is a community of developers who are interested in Google's
            developer technology. From Android, Web, and Google Cloud Platform, to Angular, Machine Learning, and more,
            we cover a wide range of technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" ref={missionRef}>
              <h3 className="text-2xl font-bold mb-4 text-google-blue">Our Mission</h3>
              <p>
                To build a strong developer community at Tezpur University where students can learn, share, and grow
                together through events, workshops, and collaborative projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100" ref={visionRef}>
              <h3 className="text-2xl font-bold mb-4 text-google-red">Our Vision</h3>
              <p>
                To create an inclusive tech ecosystem that empowers students to become industry-ready developers and
                innovators who can solve real-world problems.
              </p>
            </div>
          </div>

          <div ref={historyRef}>
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p className="mb-4">
              GDG Tezpur University was established in 2019 with a small group of passionate students who wanted to
              bring Google technologies to campus. Since then, we've grown to over 900 active members and have conducted
              more than 20 successful events.
            </p>
            <p className="mb-4">
              Our community has hosted workshops on Android Development, Web Development, Cloud Computing, Machine
              Learning, and more. We've also organized hackathons, coding competitions, and tech talks featuring
              industry experts.
            </p>
            <p>
              Today, GDG Tezpur University stands as one of the most active technical communities on campus, providing a
              platform for students to enhance their skills, network with professionals, and stay updated with the
              latest technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
