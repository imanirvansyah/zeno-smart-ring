"use client"
import { Canvas3D } from "@/components/sections/3d-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const FollowUpSection = () => {
  useGSAP(() => {


    gsap.to("#follow-up .title", {
      scrollTrigger: {
        trigger: "#follow-up .title",
        start: "start, 90%",
      },
      y: 0,
      opacity: 1,
      delay: 0.1
    })

    gsap.to("#follow-up .subtitle", {
      scrollTrigger: {
        trigger: "#follow-up .title",
        start: "start, 90%"
      },
      y: 0,
      opacity: 1,
      delay: 0.2
    })
    gsap.to("#follow-up .placeholder", {
      scrollTrigger: {
        trigger: "#follow-up .title",
        start: "start, 90%"
      },
      y: 0,
      opacity: 0.3,
      delay: 0.3
    })
  }, {})
  return (
    <div className="follow_up" id="follow-up">
      <h1 className="title">You’ve seen the vision. Now be part of it.</h1>
      <p className="subtitle">Zen O is coming — and this is your chance to lead the wearable revolution.</p>
      <div className="placeholder">
        <Canvas3D isRotating />
      </div>
    </div>
  )
}