"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const FeaturesSection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#feature-1", {
      scrollTrigger: {
        trigger: "#feature-1",
        start: "center 75%",
      },
      y: 0,
      opacity: 1
    })
    gsap.to("#feature-2", {
      scrollTrigger: {
        trigger: "#feature-2",
        start: "center 75%",
      },
      y: 0,
      opacity: 1
    })
    gsap.to("#feature-3", {
      scrollTrigger: {
        trigger: "#feature-3",
        start: "center 75%",
      },
      y: 0,
      opacity: 1
    })
    gsap.to("#feature-4", {
      scrollTrigger: {
        trigger: "#feature-4",
        start: "center 75%",
      },
      y: 0,
      opacity: 1
    })
  })
  return (
    <>
      <div className="feature_container" id="feature-1">
        <div>
          <h1>Track Your Health, Seamlessly.</h1>
          <p>Monitor heart rate, sleep, and vitals — 24/7, screen-free.</p>
        </div>
      </div>
      <div className="feature_container" id="feature-2">
        <div>
          <h1>Stay in Motion.</h1>
          <p>Monitor heart rate, sleep, and vitals — 24/7, screen-free.</p>
        </div>
      </div>
      <div className="feature_container" id="feature-3">
        <div>
          <h1>Tap to Unlock Life.</h1>
          <p>Secure payments and access — no wallet, no phone.</p>
        </div>
      </div>
      <div className="feature_container" id="feature-4">
        <div>
          <h1>STAY FOCUS ON MEETING</h1>
          <p>Focuse on what you’re doing, zeno do the rest</p>
        </div>
      </div>
    </>
  )
}