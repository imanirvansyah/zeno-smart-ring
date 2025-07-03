"use client"

import { Button } from '@/components/ui/button';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Navbar = () => {
  useGSAP(() => {
    const animate = () => {
      gsap.to(".navbar", {
        top: 0,
        opacity: 1,
      })
    }
    animate()
  }, {})

  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-logo">Zen o</span>
        <Button>Join the Launch List</Button>
      </div>
    </nav>
  )
}