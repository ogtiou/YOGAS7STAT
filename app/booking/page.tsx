

export default function Booking() {
  return(
    <div className="overflow-hidden">
      <div className="w-full h-[200vh] bg-[#ebded1] flex flex-col lg:flex-row lg:h-screen">
        <div className="relative flex-1 flex items-center justify-center left-hover a-btn">
          <div className="relative flex flex-col items-center z-10">
            <p className="text-[5rem] leading-none sm:text-8xl 4xl:text-9xl text-center
              font-bold uppercase text-[#2b3d29b7] left-text pointer-events-none">
              yogas7 <br /> tunnit
            </p>
            <div className="relative mt-[5%] w-full flex items-center justify-center">
              <p className="relative z-20 pointer-events-none text-xl px-7 py-3 border-4 rounded-full
                bg-[#ebded1] border-[#2b3d29b7] text-[#2b3d29b7] font-semibold transition-all duration-[0.3s] p-btn">Varaa tunti tästä</p>
              <a href="https://www.varaaheti.fi/yogas7/fi/yoga_s7_oy/classes" target="blank" 
                  className="absolute z-10 text-xl px-8 py-4 rounded-full btn-hover
                 bg-[#ebded1] text-[#2b3d29] font-semibold transition-all duration-[0.3s] opacity-0 a-btn2 will-change-transform">Varaa tunti tästä</a>
            </div>
          </div>
          <div className="absolute z-[6] bg-[#4d4d4d50] w-full h-full opacity-0 opa"></div>
          <video src="/videos/yoga.mp4" autoPlay loop muted playsInline className="absolute bg-[#ebded1] w-full h-full object-cover z-[5] brightness-75 opacity-0 opa"/>
        </div>
        <div className="relative flex-1 flex items-center justify-center left-hover a-btn">
          <div className="relative flex flex-col items-center z-10">
            <p className="text-[5rem] leading-none sm:text-8xl 4xl:text-9xl text-center
              font-bold uppercase text-[#2b3d29b7] left-text pointer-events-none">
              yogas7 <br /> prepaid
            </p>
            <div className="relative mt-[5%] w-full flex items-center justify-center">
              <p className="relative z-20 pointer-events-none text-xl px-7 py-3 border-4 rounded-full
                bg-[#ebded1] border-[#2b3d29b7] text-[#2b3d29b7] font-semibold transition-all duration-[0.3s] p-btn">Varaa tunti tästä</p>
              <a href="https://www.varaaheti.fi/yogas7/fi/prepaids" target="blank" 
                  className="absolute z-10 text-xl px-8 py-4 rounded-full btn-hover
                 bg-[#ebded1] text-[#2b3d29] font-semibold transition-all duration-[0.3s] opacity-0 a-btn2 will-change-transform">Varaa tunti tästä</a>
            </div>
          </div>
          <div className="absolute z-[6] bg-[#4d4d4d50] w-full h-full opacity-0 opa"></div>
          <video src="/videos/yoga.mp4" autoPlay loop muted playsInline className="absolute bg-[#ebded1] w-full h-full object-cover z-[5] brightness-75 opacity-0 opa"/>
        </div>
      </div>
    </div>
  )
}
