import Style from './features.module.css';

export const FeaturesSection = () => {
  return (
    <section className={Style.features}>
      <div className={Style.feature_container}>
        <div>
          <h1>Track Your Health, Seamlessly.</h1>
          <p>Monitor heart rate, sleep, and vitals — 24/7, screen-free.</p>
        </div>
      </div>
      <div className={Style.feature_container}>
        <div>
          <h1>Stay in Motion.</h1>
          <p>Monitor heart rate, sleep, and vitals — 24/7, screen-free.</p>
        </div>
      </div>
      <div className={Style.feature_container}>
        <div>
          <h1>Tap to Unlock Life.</h1>
          <p>Secure payments and access — no wallet, no phone.</p>
        </div>
      </div>
      <div className={Style.feature_container}>
        <div>
          <h1>STAY FOCUS ON MEETING</h1>
          <p>Focuse on what you’re doing, zeno do the rest</p>
        </div>
      </div>
    </section>
  )
}