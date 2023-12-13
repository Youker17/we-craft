import {
  Featured
} from '@/components';
import Cards from '@/components/UI/Cards';
import { HeroSection2 } from '@/components/UI/HeroSection';
import Services from '@/components/UI/Service';
import Testimonials from '@/components/UI/Testimonials/Testimonials';




export default function Home() {
  return (


    <main>
      {/* <HeroSection /> */}
      <HeroSection2 />
      {/* <FlareCursor /> */}
      {/* <HeroSection /> */}
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
