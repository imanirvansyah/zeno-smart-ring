import Image from "next/image"
import Style from "./support.module.css"

export const SupportAppSection = () => {
  return (
    <section className="section">
      <h1>SYNC. CUSTOMIZE. GO.</h1>
      <p>Get real-time health data, activity reports, and smart alerts synced instantly to your app. Personalize your experience, manage preferences, and stay in control — wherever you go.</p>
      <div className={Style.images_container}>
        <Image src="/images/mockup-right.png" width={800} height={500} alt="mockup-right" className={Style.mockup_right} />
        <Image src="/images/mockup-left.png" width={800} height={500} alt="mockup-left" className={Style.mockup_left} />
      </div>

    </section>
  )
}