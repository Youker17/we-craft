'use client';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import { GetStartedButton } from '@/components';
import MaskText from '@/components/Common/MaskText';
import hero_background from '@/assets/hero/BG-Hero-01.svg';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
  const isMobile = useIsMobile();
  return (
    <div
      className=''
      style={{
        background: `url(${hero_background.src}) no-repeat`,
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
      <Wrapper>
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
          <GetStartedButton padding="1rem 2rem" />
        </Inner>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
