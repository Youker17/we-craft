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
import Cards from '@/components/UI/Cards';
import FlareCursor from '@/components/UI/Cursor/Cursor';
import Testimonials from '@/components/UI/Testimonials/Testimonials';



export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <HeroSection2 />
      <FlareCursor />
      {/* <HeroSection /> */}
      <Featured />
      <Cards />
      <Testimonials />
      {/*<OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ /> */}
    </main>
  );
}
