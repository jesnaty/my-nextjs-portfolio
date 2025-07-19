"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1200
          const windowHeight = typeof window !== "undefined" ? window.innerHeight : 800

          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          if (newX > windowWidth) newX = 0
          if (newX < 0) newX = windowWidth
          if (newY > windowHeight) newY = 0
          if (newY < 0) newY = windowHeight

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 50)
    const handleResize = () => generateParticles()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
    }

    return () => {
      clearInterval(interval)
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 animate-gradient-shift bg-300%" />

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-blue-500/20 rounded-full animate-rotate-slow" />
      <div className="absolute top-40 right-32 w-24 h-24 border border-blue-400/30 rotate-45 animate-pulse-glow" />
      <div className="absolute bottom-32 left-40 w-40 h-40 border border-blue-600/15 rounded-lg animate-float" />
      <div className="absolute bottom-20 right-20 w-28 h-28 border border-blue-300/25 rounded-full animate-pulse-glow" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse-glow"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-slate-900/40" />
    </div>
  )
}
