"use client"

import { useScroll, useMotionValueEvent } from "framer-motion"
import { useRef, useState } from "react"

const Main = () => {

  const [deliverProgress, setDeliverProgress] = useState<number>(0)
  const [smashProgress, setSmashProgress] = useState<number>(0)
  const [circleProgress, setCircleProgress] = useState<number>(0)
  const deliverDiv = useRef(null)
  const circleDiv = useRef(null)

  const { scrollYProgress: heroScroll } = useScroll({
    target: deliverDiv
  })
  const { scrollYProgress: circleScroll } = useScroll({
    target: circleDiv
  })

  useMotionValueEvent( heroScroll, "change", (latest) => {
    if (latest * 200 <= 100) {
      setDeliverProgress(latest * 200)
      setSmashProgress(0)
    } else {
      setSmashProgress(latest * 200 - 100)
    }
  })

  useMotionValueEvent( circleScroll, "change", (latest) => {
    if (latest * 200 < 200) {
      setCircleProgress(latest * 200)
    }
  })

  return (
    <main>
      <div className=" z-0 h-screen w-screen fixed top-0 left-0 bg-gradient-to-t from-slate-900 from-30% via-indigo-500 via-60% to-indigo-50 ">

      </div>
      <div ref={deliverDiv} className=" pt-44 px-14 relative z-10" style={{height: "400vh"}}>
        <div className=" text-7xl sm:text-7xl lg:text-9xl sticky top-44">
          <h1 className=" text font-normal text-white sm:whitespace-nowrap">Wix Studio</h1>
          <div className=" relative">
            <h1 className=" font-normal text-neutral-500  sm:whitespace-nowrap">Deliver brilliance.</h1>
            <h1 style={{ width: `${deliverProgress}%` }} className=" absolute top-0 left-0 text font-normal text-white  sm:whitespace-nowrap overflow-hidden">Deliver brilliance.</h1>
          </div>
          <div className=" relative">
            <h1 className=" font-normal text-neutral-500  sm:whitespace-nowrap">Smash deadlines.</h1>
            <h1 style={{ width: `${smashProgress}%` }} className=" absolute top-0 left-0 text font-normal text-white  sm:whitespace-nowrap overflow-hidden">Smash deadlines.</h1>
          </div>
        </div>
      </div>
      <div ref={circleDiv} className="" style={{height: "400vh"}}>
        <div className=" sticky top-0 h-screen w-scree flex justify-center items-center">
          <div className={` ${circleProgress >= 160 ? "":"rounded-full"} absolute aspect-square bg-white overflow-hidden flex justify-center items-center whitespace-nowrap text-center`} style={{ width: `${circleProgress}%`}}>
            <h1 className=" text-3xl">A plataforma de criação de sites para agências</h1>
          </div> 
        </div>
      </div>
    </main>
  )
}

export default Main