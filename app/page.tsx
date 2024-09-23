'use client'
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLenisContext } from "./lenis";
import bali from '@/public/images/bali2.png'
import img2 from '@/public/images/img2.jpg'
import img3 from '@/public/images/img3.png'
gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {

  const starter = useRef(null)
  const texts = useRef(null)
  const currentYear = new Date().getFullYear()

  const { setIsScrollEnabled } = useLenisContext()

  useGSAP(() => {

    gsap.set(texts.current, {
      y: '50%'
    })

    const tl = gsap.timeline({
      defaults: {
        duration: 1.2,
        ease: 'power3.inOut'
      },
      onStart: () => {
        setIsScrollEnabled(false),
        document.body.style.overflow = 'hidden'
      },
      onComplete: () => {
        setIsScrollEnabled(true),
        document.body.style.overflow = ''
      }
    })

    tl.to(texts.current, {
      opacity: 1,
      y: 0,
      duration: 1.6,
    }).to(texts.current, {
      opacity: 0,
      duration: 1
    }).to(starter.current, {
      height: 0
    }, 2)
  }, [starter, texts, setIsScrollEnabled])

  return (
    <div className="overflow-hidden bg-[#ebded1]">
      <div ref={starter} className="fixed w-full h-screen bg-[#363f35bd] backdrop-blur-3xl z-[100] flex items-center justify-center overflow-hidden">
        <p ref={texts} className="text-6xl sm:text-9xl select-none 2xl:text-[12rem] uppercase font-bold opacity-0 text-[#d8d0c7]">welcome</p>
      </div>
      {/* page1 */}
      <div className="relative w-full h-screen flex items-center justify-center grad z-20">
        <div className="w-full h-full">
          <div className="absolute bg-[#63636344] w-full h-full"></div>
          <video src="/videos/yogavid.mp4" autoPlay loop muted playsInline className="relative bg-[#2e362e] object-cover w-full h-full z-[-1] brightness-75"/>
        </div>
        <div className="absolute w-full h-full flex items-center justify-center flex-col">
          <div className="w-full flex flex-col justify-center items-center leading-[0.65] 
              text-[#d8d0c7] font-bold uppercase text-[6rem] font-gunsan 
              select-none sm:text-[10rem] md:text-[25vw] lg:text-[18rem] xl:text-[22rem] 3xl:text-[28rem] 4xl:text-[32rem] pointer-events-none">
              <p className="-translate-x-[8%]">Yogas7</p> 
              <p className="translate-x-[8%]">studio</p>
          </div>
          <div className="flex flex-col relative items-center justify-center w-full translate-y-[50%] mt-4">
            <a href="https://3dmagazine.aflip.in/e585a148c9.html" target="blank" 
              className="relative px-7 py-4 text-base sm:text-lg bg-[#d8d0c7] rounded-full
              font-medium button1 3xl:text-xl z-20">
                Meet your instructor
            </a>
            <div className="flex flex-col pt-10 sm:pt-0 sm:flex-row relative gap-4 sm:absolute sm:gap-[18rem] z-10 text-[#e4ded8]
            text-base font-semibold items-center">
              <a href="https://www.instagram.com/yogas7.fi/?igsh=NmpjY2psY3JhcWlw" target="blank" className="
              border-2 border-[#e4ded8] px-5 py-2 rounded-full insta-och-face">Instagram</a>
              <a href="https://www.facebook.com/share/CjcB12YwpKuSpZua/?mibextid=LQQJ4d" target="blank" className="
              border-2 border-[#e4ded8] px-5 py-2 rounded-full insta-och-face">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* page2 */}
      <div className="relative w-full h-auto flex items-center justify-center bg-[#ebded1] py-4 xl:py-0 xl:h-screen">
        <div className="relative w-[95%] h-[90%] rounded-3xl flex flex-col-reverse xl:flex-row items-center bg-[#77977725]">
          <div className="flex-1 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center w-[95%] mt-8 
              xl:mt-0 md:w-[60%] gap-7 text-[#c59245] mb-8 xl:mb-0">
              <p className="text-5xl sm:text-6xl 3xl:text-8xl font-bold">Moikka</p>
              <p className="text-xl sm:text-xl 3xl:text-4xl font-semibold">Olen YOGA S7 yrityksen perustaja. Tarjoan hyvinvointia päästä varapaisin.
                Elokuussa auennut jooga, pilates ja hyvnvoinnin studio
                Lauttasaaressa Särkiniementie 5. <br /><br />Tule sellaisena kuin olet rauhaissaan
                olohuoneeseen, kun tarvitsen hengähdystaukoa arjen keskellä tai hetken aikaa jakaa 
                ajatuksia. One moment can change a day. One day can change a life. One life can change the world.
                  <br /><br />-Buddha-</p>
                <a href="/booking" className="border-2 rounded-full px-8 py-2 text-lg font-semibold
                border-[#c59245] varaa 3xl:text-2xl">Varaa</a>
                <p className="text-sm text-[#2e362eb2] cursor-default select-none">
                  ePassi, Edenred, Smartum, Liikunta setelit
                </p>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex items-center justify-center">
            <div className="w-[90%] h-[30rem] mt-4 xl:mt-0 xl:h-full rounded-xl overflow-hidden">
              <Image src={bali} alt="" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>

      {/* page3 */}
      <div className="relative w-full h-auto bg-[#ebded1] flex flex-col items-center gap-14 pt-10 pb-14 cursor-default select-none">
        <p className="uppercase text-[#c59245] text-[5rem] leading-none font-bold sm:text-9xl">Studio</p>
        <div className="flex items-center gap-8 justify-center flex-col md:flex-row md:gap-16">
          <Image src={img2} alt="" className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg"/>
          <Image src={img3} alt="" className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] rounded-lg"/>
        </div>
        <p className="uppercase text-[#c59245] text-3xl font-semibold text-center
          sm:text-4xl">
          Studiolla on kaikki tarvittavat välineet
        </p>
      </div>

      {/* footer */}
      <div className="relative w-full h-auto bg-[#acc89f] rounded-t-[2rem] flex flex-col items-center justify-between">
        <p className="pt-8 text-white text-2xl sm:text-3xl font-semibold">Sisäänkäynti 5A, rapusta B</p>
        <div className="w-full h-[25rem] flex items-center justify-center pt-8">
          <iframe className="rounded-2xl w-[95%] md:w-[40rem] h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.0657724405653!2d24.877922466435255!3d60.148673506340685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920be8fe13e999%3A0x8532842a7ffbcae5!2sYOGA%20S7!5e0!3m2!1sen!2sfi!4v1727035105860!5m2!1sen!2sfi"
              style={{ border: 0 }} // Corrected to JSX object format
              allowFullScreen // JSX uses camelCase for props
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="py-8">
          <p className="text-[#ffffff] text-xs">&copy; {currentYear}, &copy; YOGAS7, &reg; ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </div>
  );
}
