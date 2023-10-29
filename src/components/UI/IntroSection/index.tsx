'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Edge, Edges, Title } from '../FinancialFreedom/styles';
import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';
import lola_card from '../../../../public/images/lola_card.png';
import orange_card from '../../../../public/images/orange_card.png';
import terry_card from '../../../../public/images/terry_card.png';
import {
  Wrapper,
  Inner,
  Header,
  CardsContainer,
  LeftImage,
  MiddleImage,
  RightImage,
} from './styles';

const edges = [
  {
    point: 'Contactless Technology',
    details:
      'Our new cards come equipped with contactless technology, allowing you to make swift, secure payments with a simple tap.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Personalization',
    details:
      'Customize your card to reflect your unique style. Choose from a range of designs that suit your personality.',
    icon: ic_identification,
  },
  {
    point: 'Enhanced Security',
    details:
      'Your peace of mind is our priority. Our cards feature advanced security measures to protect your transactions and data.',
    icon: ic_lock_closed,
  },
];

const IntroSection = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>Introducing</h3>
          <h1>Introducing RAFT&apos;s Next-Gen Cards</h1>
          <p>
            Discover RAFT&apos;s latest innovation – our new cards. Elevate your
            banking experience with cutting-edge features, security, and
            unprecedented convenience.
          </p>
        </Header>
        <CardsContainer>
          <LeftImage
            className={isHovered ? 'active' : ''}
            src={orange_card}
            alt="orange_atm_card"
          />
          <MiddleImage
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            src={lola_card}
            alt="blue card"
          />
          <RightImage
            className={isHovered ? 'active' : ''}
            src={terry_card}
            alt="terry card"
          />
        </CardsContainer>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                {edge.point}
              </Title>
              <p>{edge.details}</p>
            </Edge>
          ))}
        </Edges>
      </Inner>
    </Wrapper>
  );
};

export default IntroSection;