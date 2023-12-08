import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';
import logo from '@/assets/WHITE.svg';

const linksArr = [
  {
    title: 'About us',
    links: ['Our Company', 'Careers', 'Press kits'],
  },
  {
    title: 'Legal',
    links: ['Terms of use', 'Privacy policy', 'About us'],
  },
  {
    title: 'About us',
    links: ['Contact us', 'FAQ'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';
import { ImageContainer } from '../Featured/styles';

const Footer = () => {
  return (
    <Wrapper className=' p-10 mt-10 container mx-auto '>
      <Inner>

          <FooterMainContent>
            <FooterMiddle className=' '>
              <FooterLogo>
                <Image src={logo.src} width={150} height={150} alt="raft_footer_logo" />
              </FooterLogo>
              <FooterNavigation className=''>
                {linksArr.map((l, i) => (
                  <GridColumn key={i}>
                    <h3>{l.title}</h3>
                    <LinksContainer>
                      {l.links.map((link, i) => (
                        <li key={i}>{link}</li>
                      ))}
                    </LinksContainer>
                  </GridColumn>
                ))}
              </FooterNavigation>
            </FooterMiddle>
            <FooterBottom>
              <CopyRight>
                <Image src={ic_copyright} alt="copyright svg" />
                We Craft, All rights resereved.
              </CopyRight>
            </FooterBottom>
          </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
