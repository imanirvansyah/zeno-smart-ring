import { MouseIcon } from '@/components/icons/mouse'
import { DescriptionSection } from '@/components/sections/description'
import { FeaturesSection } from '@/components/sections/features'
import { FollowUpSection } from '@/components/sections/follow-up'
import { HeroSection } from '@/components/sections/hero'
import { SpecSection } from '@/components/sections/specs'
import { SupportAppSection } from '@/components/sections/support-app'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <SpecSection />
      <SupportAppSection />
      <FollowUpSection />
      <div className="scroll_indicator">
        <MouseIcon />
        <span>Scroll to discover</span>
      </div>
    </div>
  );
}
