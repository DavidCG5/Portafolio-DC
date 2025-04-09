'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    setVisible(true)
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className={`fixed z-[-10] pointer-events-none transition-all duration-100 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
      }}
    >
      <div
        className="w-[100px] h-[100px] rounded-full"
        style={{
          background: 'rgb(6, 2, 255)',
          filter: 'blur(90px)',
          boxShadow: '0 0 160px 100px rgba(6, 2, 255, 0.43)',
          mixBlendMode: 'plus-lighter',
        }}
      />
    </div>
  )
}
