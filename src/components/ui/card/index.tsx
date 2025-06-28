import React from "react"
import Style from "./card.module.css"

export const Card: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div className={Style.card}>
      {children}
    </div>
  )
}