// 'use client'
// import { ReactLenis, useLenis } from 'lenis/react'
// import React, { createContext, useContext, useEffect, useState } from 'react';

// const LenisContext = createContext()
// export const useLenisContext = () => useContext(LenisContext)

// export default function Lenis({ children }) {

//   const lenis = useLenis(() => {
//       // called every scroll
//     })
  
//   const [isScrollEnabled, setIsScrollEnabled] = useState(true)

//   useEffect(() => {
//     if (lenis) {
//       if (isScrollEnabled) {
//         lenis.start()
//       } else {
//         lenis.stop()
//       }
//     }
//   }, [isScrollEnabled, lenis])
    

//   return (
//     <LenisContext.Provider value={{ isScrollEnabled, setIsScrollEnabled }}>
//       <ReactLenis options={{duration: 0.8}} root>
//         {children}
//       </ReactLenis>
//     </LenisContext.Provider>
//   )
// }

