"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const HeroSection = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    const animate = () => {
      timeline.to("#hero-section .title", {
        y: 0,
        opacity: 1,
        delay: 0.1
      })
        .to("#hero-section .subtitle", {
          y: 0,
          opacity: 1,
          delay: 0.2
        }, "<")
    }

    animate();
  }, {})
  return (
    <>
      <div className="hero" id="hero-section">
        <div>
          <h1 className="title">The Future, Wrapped Around Your Finger.</h1>
          <p className="subtitle">Advanced sensors. Effortless interaction. Zero distractions.</p>
        </div>
        <div className="placeholder"> </div>
        {/* <div className={Style.colors}>
        <div style={{ backgroundColor: '#292A2D' }}></div>
        <div style={{ backgroundColor: '#E43BBF' }}></div>
        <div style={{ backgroundColor: '#0B0D6D' }}></div>
        </div> */}

      </div>
    </>
  )
}