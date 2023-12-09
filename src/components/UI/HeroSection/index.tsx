'use client';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { motion } from 'framer-motion';
import hero_background from '@/assets/hero/BG-Hero-01.svg';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';
import Scene from '@/components/3d/HeroSectionObjects';
import { Canvas } from '@react-three/fiber';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import logo from '@/assets/WHITE-notext.svg';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='z-10 relative '
        style={{
          // background: `url(${hero_background.src}) no-repeat`,
          justifyContent: `center`,
          alignItems: `start`,
          display: `flex`,
          backgroundSize: `cover`,
          position: 'relative',
          height: '88vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Wrapper className='z-10'>
          <Inner>
            {/* <Pill>
            <span className='flex flex-row'>Introducing
              <p className='font-extrabold text-white  mx-1'>
              WE CRAFT
              </p>
              Studio</span>
              <Image src={ic_chevron_right} alt="chevron-right" />
          </Pill> */}
            <HeroTextContainer>
              {isMobile ? (
                <>
                  <MaskText phrases={mobilePhrases} tag="h1" />
                  <MaskText phrases={mobileParagraphPhrases} tag="p" />
                </>
              ) : (
                <>
                  <MaskText phrases={phrases} tag="h1" />
                  <MaskText phrases={paragraphPhrases} tag="p" />
                </>
              )}
            </HeroTextContainer>
            <GetStartedButton padding='' />
            <div className='border-2 w-5 h-8 py-2 rounded-full mt-8 flex justify-center items-start'>
              <motion.div initial={{ translateY: 0, opacity: 1 }} animate={{ translateY: 10, opacity: 0 }} transition={{ repeat: Infinity, duration: 2 }} className='bg-white rounded-full aspect-square w-1'>

              </motion.div>

            </div>
          </Inner>
        </Wrapper>
      </motion.div>
      <div className='h-screen  w-full absolute top-0'>
        <Scene />
      </div>
    </>
  );
};

export default HeroSection;



const HeroSection2 = () => {
  return (
    <div style={
      {
        maxWidth: '1440px',
        width: '90 %',
      }
    } className='h-screen bg-black/30  mx-auto border border-white/60 p-10 rounded-3xl ' >
      <div className='flex flex-row justify-between items-start '>
        <div className='flex flex-col'>
          <h1 className='text-2xl text-white/80 font-bold'>INTRODUCING</h1>
          <h1 className='text-9xl font-bold'><MaskText phrases={["WE CRAFT"]} tag="h1" /></h1>
          <h1 className='text-9xl font-somarExtraBold text-transparent text-stroke'>STUDIO</h1>
          <p className='text-2xl w-[60%]'>We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.</p>
        </div>
        <div className='flex flex-col  h-full'>
          <Image alt='logo' width={200} height={200} src={logo.src} />
        </div>
      </div>
    </div >
  )

}

export { HeroSection2 }
