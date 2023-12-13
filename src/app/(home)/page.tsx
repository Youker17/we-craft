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
import NewCards from '@/components/UI/NewCards';
import Services from '@/components/UI/Service';
import YourComponent from '@/components/UI/Slider';
import { CardSpotlightEffect } from '@/components/UI/SpotlightEffect';
import Testimonials from '@/components/UI/Testimonials/Testimonials';
import Contact from "@/components/UI/Contact"




export default function Home() {
  return (
    

    <main>
      {/* <FlareCursor /> */}
      <HeroSection />
      <Featured />
      <Cards />
      <Services />
      <Testimonials />
      {/* <CardSpotlightEffect /> */}
      {/* <NewCards /> */}
      {/* <Contact /> */}
      {/*<OffersSection />
      <FinancilaFreedom />
      <FinancialFuture />
      <IntroSection />
      <JoinSection />
      <FAQ /> */}
    </main>
  );
}
