"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import Image from "next/image"

export const SupportAppSection = () => {
  useGSAP(() => {
    gsap.to(".support .title", {
      scrollTrigger: {
        trigger: ".support .title",
        start: "start, 90%",
      },
      y: 0,
      opacity: 1,
      delay: 0.1
    })

    gsap.to(".support .subtitle", {
      scrollTrigger: {
        trigger: ".support .title",
        start: "start, 90%"
      },
      y: 0,
      opacity: 1,
      delay: 0.2
    })
    gsap.to(".support .images_container", {
      scrollTrigger: {
        trigger: ".support .images_container",
        start: "start, 90%"
      },
      y: 0,
      opacity: 1,
      delay: 0.3
    })
  }, {})
  return (
    <div className="support">
      <h1 className="title">SYNC. CUSTOMIZE. GO.</h1>
      <p className="subtitle">Get real-time health data, activity reports, and smart alerts synced instantly to your app. Personalize your experience, manage preferences, and stay in control — wherever you go.</p>
      <div className="images_container">
        <Image src="/images/mockup-left.png" width={400} height={400} alt="mockup-left" className="mockup_left" />
        <Image src="/images/mockup-right.png" width={400} height={400} alt="mockup-right" className="mockup_right" />
      </div>

    </div>
  )
}