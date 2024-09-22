'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import React, { createContext, useContext, useEffect, useState } from 'react';

const LenisContext = createContext()
export const useLenisContext = () => useContext(LenisContext)

export default function Lenis({ children }) {

  const lenis = useLenis(({ scroll }) => {
      // called every scroll
    })
  
  const [isScrollEnabled, setIsScrollEnabled] = useState(true)

  useEffect(() => {
    if (lenis) {
      if (isScrollEnabled) {
        lenis.start()
      } else {
        lenis.stop()
      }
    }
  }, [isScrollEnabled, lenis])
    

  return (
    <LenisContext.Provider value={{ isScrollEnabled, setIsScrollEnabled }}>
      <ReactLenis options={{lerp: 0.15}} root>
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  )
}