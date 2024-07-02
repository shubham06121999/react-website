import React from 'react';

import styled from 'styled-components';
import tw from 'twin.macro';

import Header, {
  DesktopNavLinks,
  LogoLink,
  NavLink,
  NavLinks,
  NavToggle,
  PrimaryLink as PrimaryLinkBase,
} from '../headers/light.js';

const activeLinkStyle = tw`border-orange-spartan1 text-orange-spartan1`;
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} { 
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-orange-spartan1`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url(${(props) => props.backgroundImage});
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-orange-700 text-gray-100 hocus:bg-orange-900 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const HeadingCustom = ({ headingText,HireUs }) => (
  <Content>
    <Heading dangerouslySetInnerHTML={{ __html: headingText }} />
    {HireUs ? <PrimaryLink  href="/ContactUs">Hire Us</PrimaryLink> : ''}
  </Content>
);

export default ({
  navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/Services">Services</NavLink>
      <NavLink href="/AboutUs">AboutUs</NavLink>
      <NavLink href="/ContactUs">ContactUs</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/ContactUs">Hire Us</PrimaryLink>
    </NavLinks>,
  ],
  logoText = "Spartan App<br />Solutions",
  logo,
  headingText,
  backgroundImage,
  HireUs =false
}) => {
  return (
    <Container backgroundImage={backgroundImage}>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} logoText={logoText} logo={logo} />
        <Content>
        {headingText ? <HeadingCustom headingText={headingText} HireUs={HireUs} /> : ''}

        </Content>
      </HeroContainer>
    </Container>
  );
};
