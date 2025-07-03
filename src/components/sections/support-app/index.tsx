import Image from "next/image"
import Style from "./support.module.css"

export const SupportAppSection = () => {
  return (
    <div className="support">
      <h1 className="title">SYNC. CUSTOMIZE. GO.</h1>
      <p className="subtitle">Get real-time health data, activity reports, and smart alerts synced instantly to your app. Personalize your experience, manage preferences, and stay in control — wherever you go.</p>
      <div className={Style.images_container}>
        <Image src="/images/mockup-left.png" width={400} height={400} alt="mockup-left" className={Style.mockup_left} />
        <Image src="/images/mockup-right.png" width={400} height={400} alt="mockup-right" className={Style.mockup_right} />
      </div>

    </div>
  )
}