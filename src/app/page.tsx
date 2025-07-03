import { Canvas3D } from "@/components/sections/3d-section";
import { DescriptionSection } from "@/components/sections/description";
import { FeaturesSection } from "@/components/sections/features";
import { FollowUpSection } from "@/components/sections/follow-up";
import { HeroSection } from "@/components/sections/hero";
import { SpecSection } from "@/components/sections/specs";
import { SupportAppSection } from "@/components/sections/support-app";
import { Footer } from "@/components/fragments/footer";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <div className="sticky-container">
          <div className="sticky-box">
            <Canvas3D isRotating />
          </div>
        </div>
        <div className="absolute-container">
          <section className="section">
            <HeroSection />
          </section>
          <section className="section container">
            <DescriptionSection />
          </section>
          <section className="section container">
            <FeaturesSection />
          </section>
          <section className="section container">
            <SpecSection />
          </section>
          <section className="section">
            <SupportAppSection />
          </section>
          <FollowUpSection />
          <Footer />
        </div>
      </div>
    </>
  );
}