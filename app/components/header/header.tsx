'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.png"
import { useEffect, useState } from "react";
import Nav from "../nav/nav";
import { AnimatePresence } from "framer-motion";
// import { useLenisContext } from "@/app/lenis";

export default function Header() {

    const pathname = usePathname()
    const [isActive, setIsActive] = useState<boolean>(false)

    // const { setIsScrollEnabled } = useLenisContext()

    // useEffect(() => {
    //     if (setIsScrollEnabled) {
    //         if (isActive) {
    //             setIsScrollEnabled(false)
    //         } else {
    //             setIsScrollEnabled(true)
    //         }
    //     }
    // }, [isActive, setIsScrollEnabled])
  
    useEffect(() => {
        if (isActive) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isActive])

  return(
    <>
        <div className="fixed px-4 md:px-8 4xl:px-[5rem] py-4 z-[55]">
            <Link href={"/"}>
                <div className="flex items-center justify-center -my-1 w-[5rem]">
                    <Image src={logo} alt="" className="w-full h-full"/>
                </div>
            </Link>
        </div>
        <div className="fixed w-full items-center justify-center z-50 py-6 hidden md:flex">
            <div className="flex gap-8 backdrop-blur-lg text-[#000000b9] bg-[#d8d0c7a9] px-8 py-4 rounded-lg">
                <Link href={'/'} className={`${pathname === '/' ? 'under text-black' : 'under-hover'} relative`}>Home</Link>
                <a href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank" className="under-hover">About</a>
                <Link href={'/booking'} className={`${pathname === '/booking' ? 'under text-black' : 'under-hover'} relative`}>Booking</Link>
                <a href="mailto:rajusanna7@gmail.com" className="under-hover">Contact</a>
            </div>
        </div>
        <div className="fixed top-0 right-0 mx-4 my-8 z-50 flex overflow-hidden md:hidden text-lg bg-[#d8d0c7a9] backdrop-blur-sm px-4 py-1 rounded-lg">
            <div onClick={() => setIsActive((prev) => !prev)} className={`${isActive ? 'translate-y-[115%]' : ''} transition-all`}>
                <p className="relative">Menu</p>
                <p className="absolute bottom-8">Close</p>
            </div>
        </div>
        <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive}/>}
        </AnimatePresence>
    </>
  )
}
