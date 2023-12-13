'use client';
import logo from '@/assets/WHITE-notext.svg';
import { GetStartedButton } from '@/components';
import Scene from '@/components/3d/HeroSectionObjects';
import MaskText from '@/components/Common/MaskText';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';
import { HeroTextContainer, Inner, Wrapper } from './styles';

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
          // overflow: 'hidden',
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
      {/* <div className='h-screen  w-full absolute top-0'>
        <Scene />
      </div> */}
    </>
  );
};

export default HeroSection;



const HeroSection2 = () => {
  const description = useRef(null)
  const isInView = useInView(description, { once: true })
  const container = useRef(null)
  return (
    <div
      ref={container}
      className='h-[200vh]  relative' >
      <div className=''>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={
            {
              maxWidth: '1440px',
              width: '90%',
            }
          } className='h-screen   mx-auto border-[.2px] border-white/10 p-10 rounded-3xl ' >
          <div className='flex flex-row justify-between items-start '>
            <div className='flex flex-col'>
              <h1 className='text-2xl text-white/80 font-bold'>INTRODUCING</h1>
              <h1 className='text-9xl font-bold'><MaskText phrases={["WE CRAFT"]} tag="h1" /></h1>
              <h1 className='text-9xl font-somarExtraBold text-transparent text-stroke relative bg-clip-text '>
                <div className='w-10 h-full absolut bg-white'></div>
                STUDIO.
              </h1>
              <p className='text-2xl w-[60%]'>We are a team of passionate people whose goal is to improve everyone&apos;s life through disruptive products. We build great products to solve your business problems.</p>

              {/* <div className='w-60 flex flex-row z-50 mt-5'>
              <GetStartedButton padding='' />
            </div> */}
            </div>
            <div className='flex flex-col  h-full'>
              {/* <Image alt='logo' width={200} height={200} src={logo.src} /> */}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 10,
            opacity: 0
          }}
          animate={isInView ? {
            y: 0,
            opacity: 1
          } :
            {
              y: 10,
              opacity: 0
            }
          }
          ref={description}
          style={
            {
              maxWidth: '1440px',
              width: '90%',
            }
          } className='h-screen bg-black/30  mx-auto border-[.5px] border-white/25 p-10 rounded-3xl '
        >
          <div className='flex flex-row justify-between items-start '>
            <div className='flex flex-col'>
              <h2 className='text-2xl text-white/80 font-bold'>
                <div className='flex flex-row items-end w-40 gap-2'>
                  INTRODUCING
                  <div></div>
                  <svg className='text-white' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" />
                  </svg>
                  <span className='text-9xl  text-white'>.</span>
                </div>
              </h2>
              <h1 className='text-9xl font-bold'><MaskText phrases={["WE CRAFT"]} tag="h1" /></h1>
              <h1 className='text-9xl font-somarExtraBold text-transparent text-stroke relative bg-clip-text '>
                <div className='w-10 h-full absolut bg-white'></div>
                STUDIO.
              </h1>
              <p className='text-2xl w-[60%]'>We are a team of passionate people whose goal is to improve everyone&apos;s life through disruptive products. We build great products to solve your business problems.</p>

            </div>
            <div className='flex flex-col  h-full'>
              <Image alt='logo' width={200} height={200} src={logo.src} />
            </div>
          </div>
        </motion.div>
      </div>
      <div
        style={{
          height: "200dvh"

        }} className=" w-full absolute top-0 left-0">
        <div className='relative h-full w-full '>
          <div className='sticky top-0 w-full left-0 h-screen  '>
            <Scene container={container} />
          </div>
        </div>
      </div>
    </div>
  )

}

export { HeroSection2 };

