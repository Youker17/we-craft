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
import Cards from '@/components/UI/Cards';
import FlareCursor from '@/components/UI/Cursor/Cursor';
import Testimonials from '@/components/UI/Testimonials/Testimonials';



export default function Home() {
  return (
    <main>
      <FlareCursor />
      <HeroSection />
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
