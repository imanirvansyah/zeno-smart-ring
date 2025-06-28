import { Card } from '@/components/ui/card';
import Style from './spec.module.css';
import SpeedometerIcon from '@/components/icons/speedometer';
import WirelessIcon from '@/components/icons/wireless';
import PaymentIcon from '@/components/icons/payment';
import ResizeIcon from '@/components/icons/resize';

export const SpecSection = () => {
  return (
    <section className="section">
      <h1>Built for sustainability</h1>
      <p>Tiny tech. Big endurance.</p>
      <div className="canvas"> </div>
      <div className={Style.spec_container}>
        <Card>
          <SpeedometerIcon />
          <ul>
            <li>Up to 7 days (typical usage)</li>
            <li> ~60 minutes via wireless charging dock</li>
            <li> 7-day onboard activity and health data</li>
            <li>Water Resistance 5ATM (50 meters) – swim-proof</li>
            <li>Material Titanium Grade 2 with ceramic coating</li>
          </ul>
        </Card>
        <Card>
          <WirelessIcon />
          <ul>
            <li>Heart Rate Monitor: Optical PPG Sensor</li>
            <li>SpO₂ Sensor: Red/IR dual wavelength</li>
            <li>Temperature Sensor: Skin surface temperature tracking</li>
            <li>3-Axis Accelerometer: Activity and gesture detection</li>
            <li>Gyroscope: Sleep and motion classifications</li>
          </ul>
        </Card>
        <Card>
          <PaymentIcon />
          <ul>
            <li>Bluetooth: BLE 5.2 (Low Energy)</li>
            <li>Compatibility: iOS 13+ / Android 9+</li>
            <li>NFC: Yes – Secure Payment & Access (ISO/IEC 14443)</li>
          </ul>
        </Card>
        <Card>
          <ResizeIcon />
          <ul>
            <li>Ring Sizes: US 6 – 12</li>
            <li>Weight: ~4 grams</li>
            <li>Hypoallergenic inner band, rounded edges</li>
            <li>–10°C to 50°C (wearable conditions)</li>
          </ul>
        </Card>
      </div>
    </section>
  )
}