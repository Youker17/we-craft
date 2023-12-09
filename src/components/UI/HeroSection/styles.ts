'use client';
import { styled } from 'styled-components';
import hero_background from '@/assets/hero/BG-Hero-01.svg';

export const Wrapper = styled.section`
  margin-top: 5.25rem;
`;

export const Inner = styled.div`
  // background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: cover;
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 2rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const HeroTextSloganDown = styled.div`

  h1 {
    line-height: 1.5rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--light-gray);
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 6rem;
    line-height: 6.5rem;
    // font-weight: 800;
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
