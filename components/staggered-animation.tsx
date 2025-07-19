"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
}

export function StaggeredAnimation({ children, className = "", staggerDelay = 100 }: StaggeredAnimationProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(children.length).fill(false))
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * staggerDelay)
          })
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [children.length, staggerDelay])

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all duration-700 ease-out ${
            visibleItems[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
