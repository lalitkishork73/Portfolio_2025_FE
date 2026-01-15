import { useRef } from "react"

export function useScrollFade<T extends HTMLElement = HTMLDivElement>() {
  return useRef<T | null>(null)
}
