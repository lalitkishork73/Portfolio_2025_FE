import { useEffect, useRef, useState } from 'react'

export function useTypewriter(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState('')
  const indexRef = useRef(0)
  const lastTimeRef = useRef(0)

  useEffect(() => {
    indexRef.current = 0
    setDisplayed('')
    lastTimeRef.current = 0

    let rafId: number

    const animate = (time: number) => {
      if (time - lastTimeRef.current >= speed) {
        if (indexRef.current < text.length) {
          setDisplayed(prev => prev + text.charAt(indexRef.current))
          indexRef.current++
          lastTimeRef.current = time
        }
      }

      if (indexRef.current < text.length) {
        rafId = requestAnimationFrame(animate)
      }
    }

    rafId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(rafId)
  }, [text, speed])

  return displayed
}
