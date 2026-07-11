import { HeroSection } from '@/components/home/HeroSection';
import { ProblemSolutionSection } from '@/components/home/ProblemSolutionSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { MethodologySection } from '@/components/home/MethodologySection';
import { PortfolioSection } from '@/components/home/PortfolioSection';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <MethodologySection />
      <PortfolioSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
