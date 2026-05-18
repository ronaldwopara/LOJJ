"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionTemplate } from "motion/react"

import { cn } from "@/lib/utils"

interface Position {
  /** The x coordinate of the lens */
  x: number
  /** The y coordinate of the lens */
  y: number
}

interface LensProps {
  /** The children of the lens */
  children: React.ReactNode
  /** The zoom factor of the lens */
  zoomFactor?: number
  /** The size of the lens */
  lensSize?: number
  /** The position of the lens */
  position?: Position
  /** The default position of the lens */
  defaultPosition?: Position
  /** Whether the lens is static */
  isStatic?: boolean
  /** The duration of the animation */
  duration?: number
  /** The color of the lens */
  lensColor?: string
  /** The aria label of the lens */
  ariaLabel?: string
  className?: string
  /** Applied to the masked magnified viewport wrapper */
  viewportClassName?: string
}

export function Lens({
  children,
  zoomFactor = 1.3,
  lensSize = 170,
  isStatic = false,
  position = { x: 0, y: 0 },
  defaultPosition,
  duration = 0.1,
  lensColor = "black",
  ariaLabel = "Zoom Area",
  className,
  viewportClassName,
}: LensProps) {
  if (zoomFactor < 1) {
    throw new Error("zoomFactor must be greater than 1")
  }
  if (lensSize < 0) {
    throw new Error("lensSize must be greater than 0")
  }

  const [isHovering, setIsHovering] = useState(false)
  const [mousePosition, setMousePosition] = useState<Position>(
    () => defaultPosition ?? position,
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const pendingPosRef = useRef<Position | null>(null)
  const rafRef = useRef<number | null>(null)

  const currentPosition = useMemo(() => {
    if (isStatic) return position
    return mousePosition
  }, [isStatic, position, mousePosition])

  const applyPointerPosition = useCallback((clientX: number, clientY: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    pendingPosRef.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      if (pendingPosRef.current) setMousePosition(pendingPosRef.current)
    })
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      applyPointerPosition(e.clientX, e.clientY)
    },
    [applyPointerPosition],
  )

  const handlePointerEnter = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      setIsHovering(true)
      applyPointerPosition(e.clientX, e.clientY)
    },
    [applyPointerPosition],
  )

  useEffect(() => {
    if (defaultPosition && !isHovering) {
      setMousePosition(defaultPosition)
    }
  }, [defaultPosition, isHovering])

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setIsHovering(false)
  }, [])

  const maskImage = useMotionTemplate`radial-gradient(circle ${
    lensSize / 2
  }px at ${currentPosition.x}px ${
    currentPosition.y
  }px, ${lensColor} 0%, ${lensColor} 72%, transparent 100%)`

  const LensContent = useMemo(() => {
    const { x, y } = currentPosition

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.58 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration }}
        className={cn("absolute inset-0 overflow-hidden", viewportClassName)}
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          transformOrigin: `${x}px ${y}px`,
          zIndex: 50,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `scale(${zoomFactor})`,
            transformOrigin: `${x}px ${y}px`,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    )
  }, [currentPosition, maskImage, zoomFactor, children, duration, viewportClassName])

  return (
    <div
      ref={containerRef}
      className={cn("relative z-20 overflow-hidden rounded-xl", className)}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={() => setIsHovering(false)}
      onPointerMove={handlePointerMove}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
    >
      {children}
      {isStatic || defaultPosition ? (
        LensContent
      ) : (
        <AnimatePresence mode="popLayout">
          {isHovering && LensContent}
        </AnimatePresence>
      )}
    </div>
  )
}
