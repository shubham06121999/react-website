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
} from './light.js';

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink}  
  ${NavToggle}.closed
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-orange-spartan1 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

const DropdownContainer = styled.div`
  ${tw`absolute hidden pt-2 left-0`}
  min-width: 100%;
`;

const DropdownMenu = styled.div`
  ${tw`bg-white rounded shadow-lg mt-1`}
`;

const DropdownItem = styled.a`
  ${tw`rounded-t lg:rounded-none lg:border-0 py-2 px-4 block`}
  white-space: nowrap; // Raw CSS as a fallback
`;

const  DropdownNavLink = styled(NavLink)`
  ${tw`relative inline-block`}

  &:hover ${DropdownContainer} {
    ${tw`block`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/AboutUs">About</NavLink> 
      <DropdownNavLink href="/Services">
        Services
        <DropdownContainer>
          <DropdownMenu>
            <DropdownItem href="/Service1">Service 1</DropdownItem>
            <DropdownItem href="/Service2">Service 2</DropdownItem>
            <DropdownItem href="/Service3">Service 3</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>
      </DropdownNavLink>
      <NavLink href="/ContactUs">ContactUs</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/hireUS">Hire Us</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <HeroContainer>
        <StyledHeader links={navLinks} />
      </HeroContainer>
    </Container>
  );
};
