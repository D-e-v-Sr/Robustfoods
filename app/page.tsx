import { ProposalNav } from '@/components/proposal/proposal-nav'
import { BusinessSection, OpportunitySection, StoreBenefitsSection } from '@/components/proposal/sections/business'
import { BuildProcessSection, FeaturesSection, PagesSection } from '@/components/proposal/sections/build'
import { HeroSection } from '@/components/proposal/sections/hero'
import { ConversionSection, OwnershipSection, ReliabilitySection } from '@/components/proposal/sections/growth'
import { ClosingSection, RoadmapSection } from '@/components/proposal/sections/roadmap'
import { PaymentSection, TechnologySection, VisitorGrowthSection } from '@/components/proposal/sections/commerce'

export default function Home() {
  return (
    <>
      <ProposalNav />
      <main id="main-content">
        <HeroSection />
        <BusinessSection />
        <OpportunitySection />
        <PagesSection />
        <FeaturesSection />
        <PaymentSection />
        <TechnologySection />
        <VisitorGrowthSection />
        <ConversionSection />
        <OwnershipSection />
        <ReliabilitySection />
        <RoadmapSection />
        <ClosingSection />
      </main>
    </>
  )
}
