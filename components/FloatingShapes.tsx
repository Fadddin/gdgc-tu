"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

export default function FloatingShapes() {
  const shapesRef = useRef(null)

  useGSAP(() => {
    if (!shapesRef.current) return

    const shapes = shapesRef.current.querySelectorAll(".shape")

    shapes.forEach((shape) => {
      // Random starting position
      gsap.set(shape, {
  x: `${Math.random() * 100}vw`,
  y: `${Math.random() * 100}vh`,
  rotation: Math.random() * 360,
})

gsap.to(shape, {
  x: `+=${Math.random() * 10 - 5}vw`,
  y: `+=${Math.random() * 10 - 5}vh`,
  rotation: `+=${Math.random() * 360}`,
  duration: 15 + Math.random() * 10,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
})
    })
  }, [])

  return (
    <div ref={shapesRef} className="floating-shapes">
      <div className="shape w-16 h-16 bg-google-blue rounded-full opacity-10"></div>
      <div className="shape w-24 h-24 bg-google-red rounded-full opacity-10"></div>
      <div className="shape w-20 h-20 bg-google-yellow rounded-full opacity-10"></div>
      <div className="shape w-32 h-32 bg-google-green rounded-full opacity-10"></div>
      <div className="shape w-12 h-12 bg-google-blue rounded-full opacity-10"></div>
      <div className="shape w-16 h-16 bg-google-red opacity-10 rotate-45"></div>
      <div className="shape w-24 h-24 bg-google-yellow opacity-10 rotate-45"></div>
      <div className="shape w-20 h-20 bg-google-green opacity-10 rotate-45"></div>
      <div className="shape w-8 h-8 border-2 border-google-blue rounded-full opacity-20"></div>
      <div className="shape w-12 h-12 border-2 border-google-red rounded-full opacity-20"></div>
      <div className="shape w-10 h-10 border-2 border-google-yellow rounded-full opacity-20"></div>
      <div className="shape w-16 h-16 border-2 border-google-green rounded-full opacity-20"></div>
    </div>
  )
}
