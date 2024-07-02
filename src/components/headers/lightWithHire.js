import React from 'react';

import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

import logo from '../../images/spartan/spartan_app_solutions_logo3_head.png';
import Header, {
  DesktopNavLinks,
  LogoLink,
  NavLink,
  NavLinks,
  NavToggle,
  PrimaryLink as PrimaryLinkBase,
} from './light.js';

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink}  
  ${NavToggle}.closed
`;
const activeLinkStyle = tw`border-orange-spartan1 text-orange-spartan1`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
 
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;
// const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto flex flex-col h-screen bg-center bg-cover`;

const logoText = 'Sencilla Consultancy Services' 
export default () => {
  const location = useLocation();
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/" css={location.pathname === '/' && activeLinkStyle}>
        Home
      </NavLink>
      <NavLink href="/Services" css={location.pathname === '/Services' && activeLinkStyle}>
      Services
      </NavLink>
      <NavLink href="/AboutUs" css={location.pathname === '/AboutUs' && activeLinkStyle}>
      AboutUs
      </NavLink>
      <NavLink href="/ContactUs" css={location.pathname === '/ContactUs' && activeLinkStyle}>
      ContactUs
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/ContactUs">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <HeroContainer>
      <StyledHeader links={navLinks} logoText={logoText} logo={logo} />
      </HeroContainer>
    </Container>
  );
};
