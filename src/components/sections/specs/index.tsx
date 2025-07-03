"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"


export const SpecSection = () => {
  useGSAP(() => {
    gsap.to(".spec .title", {
      scrollTrigger: {
        trigger: ".spec .title",
        start: "start, 70%",
      },
      y: 0,
      opacity: 1,
    })
    gsap.to(".spec .subtitle", {
      scrollTrigger: {
        trigger: ".spec .title",
        start: "start, 70%",
      },
      y: 0,
      opacity: 1,
      delay: 0.1
    })
    gsap.to(".spec .grid", {
      scrollTrigger: {
        trigger: ".spec .grid",
        start: "start, 70%",
      },
      y: 0,
      opacity: 1,
      delay: 0.1,
      stagger: 0.2
    })
  })
  return (
    <div className='spec'>
      <div>
        <h1 className='title'>Built for sustainability</h1>
        <p className='subtitle'>Tiny tech. Big endurance.</p>
      </div>
      <div className="grid">
        <div className="grid-content content-1">
          <h1>3-Axis Accelerometer: Activity and gesture detection</h1>
        </div>
        <div className="grid-content content-2">
          <h1>Material Titanium Grade 2 with ceramic coating</h1>
        </div>
        <div className="grid-content content-3">
          <h1>Up to 7 days (typical usage)</h1>
        </div>
        <div className="grid-content content-4">
          <h1>
            Heart Rate Monitor: Optical PPG Sensor
          </h1>
        </div>
      </div>
    </div>
  )
}