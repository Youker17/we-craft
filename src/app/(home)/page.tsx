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
import NewCards from '@/components/UI/NewCards';
import CardSwapping from '@/components/UI/Service';
import YourComponent from '@/components/UI/Slider';
import { CardSpotlightEffect } from '@/components/UI/SpotlightEffect';
import Testimonials from '@/components/UI/Testimonials/Testimonials';




export default function Home() {
  return (
    <main>
      <FlareCursor />
      <HeroSection />
      <Featured />
      <Cards />
      <Testimonials />
      {/* <CardSpotlightEffect /> */}
      {/* <YourComponent /> */}
      {/* <CardSwapping /> */}
      <NewCards />
      {/*<OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ /> */}
    </main>
  );
}
