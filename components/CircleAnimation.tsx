"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"

export default function CircleAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useGSAP(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const colors = [
      "#4285F4", // Google Blue
      "#EA4335", // Google Red
      "#FBBC05", // Google Yellow
      "#34A853", // Google Green
    ]

    const circles: { x: number; y: number; radius: number; color: string; speed: number }[] = []

    // Create circles
    for (let i = 0; i < 4; i++) {
      circles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 5 + Math.random() * 5,
        color: colors[i % colors.length],
        speed: 0.5 + Math.random() * 1,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update circles
      circles.forEach((circle, index) => {
        const angle = Date.now() * 0.001 * circle.speed + (index * Math.PI) / 2
        const distance = 30

        circle.x = canvas.width / 2 + Math.cos(angle) * distance
        circle.y = canvas.height / 2 + Math.sin(angle) * distance

        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = circle.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} width={100} height={100} className="w-20 h-20" />
}
