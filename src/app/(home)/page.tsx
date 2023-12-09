import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from '@/components';
import { HeroSection2 } from '@/components/UI/HeroSection';

export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <HeroSection2 />
      <Featured />
      {/*<OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ /> */}
    </main>
  );
}
