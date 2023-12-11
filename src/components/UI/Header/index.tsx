'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
} from './styles';
import raft_logo from '../../../../public/svgs/raft_logo.svg';
import logo from '@/assets/WHITE-notext.svg';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image width={70} src={logo} alt="raft_logo" priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        {/* <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <GetStartedButton padding="0.5rem 0.75rem" />
        </CallToActions> */}
        {/* <GetStartedButton padding="0.5rem 0.75rem" /> */}
        <div className="group relative flex h-14 w-52 cursor-pointer items-center justify-center gap-4 rounded-full border-2 border-solid border-black">
          <div className="absolute left-10 z-0 h-2 w-2 rounded-lg bg-white transition-all duration-300 ease-in-out group-hover:left-0 group-hover:h-full group-hover:w-full"></div>
          <p className="absolute mix-blend-difference right-10 z-10  uppercase transition-all duration-300 ease-in-out group-hover:right-8 ">Contact Us</p>
        </div>

      </Inner>
    </Wrapper>
  );
};

export default Header;
