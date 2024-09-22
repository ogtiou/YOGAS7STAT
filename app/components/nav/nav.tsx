'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { fading } from "@/app/anim"

interface fafa {
    setIsActive: (isActive: boolean) => void
}

export default function nav({ setIsActive }: fafa) {

    const pathname = usePathname()

  return(
    <motion.div variants={fading} initial="closed" animate="open" exit="closed" className="fixed w-full h-screen z-40 bg-[#ebded1b9] flex items-center justify-center backdrop-blur-2xl">
        <div className="relative flex flex-col justify-center items-center text-6xl gap-8
            font-bold text-[#2b3d29d2] uppercase">
            <Link onClick={() => setIsActive(false)} href={'/'} className={`${pathname === '/' ? 'under2' : ''} relative`}>Home</Link>
            <a onClick={() => setIsActive(false)} href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank" className="">About</a>
            <Link onClick={() => setIsActive(false)} href={'/booking'} className={`${pathname === '/booking' ? 'under2' : ''} relative`}>Booking</Link>
            <a onClick={() => setIsActive(false)} href="mailto:teo.raju@gmail.com" className="">Contact</a>
        </div>
    </motion.div>
  )
}
