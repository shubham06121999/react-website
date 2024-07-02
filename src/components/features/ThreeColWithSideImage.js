import React from 'react';

import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';
import CustomizeIconImage from 'images/spartan/customize-orange-icon.svg';
import FastIconImage from 'images/spartan/fast-orange-icon.svg';
import ReliableIconImage from 'images/spartan/reliable-orange-icon.svg';
import defaultCardImage from 'images/spartan/shield-orange-icon.svg';
import ShieldIconImage from 'images/spartan/shield-orange-icon.svg';
import SimpleIconImage from 'images/spartan/simple-orange-icon.svg';
import SupportIconImage from 'images/spartan/support-orange-icon.svg';
import {
  ReactComponent as SvgDecoratorBlob3,
} from 'images/svg-decorator-blob-3.svg';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "", subheading = "", description = "Whether you're looking to develop a new mobile app, modernize your web platform, or migrate your operations to the cloud, we have the expertise to help you achieve your goals." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description: "We prioritize the utmost security in our services, ensuring robust protection and peace of mind for all our clients."
    },
    { imageSrc: SupportIconImage, title: "Support",description:'Our commitment to excellence is unwavering, as we exclusively collaborate with vendors renowned for their exceptional security standards.' },
    { imageSrc: CustomizeIconImage, title: "Customizable",description:'We pride ourselves on offering highly customizable solutions, tailored to meet the unique needs and preferences of each client."'  },
    { imageSrc: ReliableIconImage, title: "Reliable" ,description:'Our services are defined by their reliability, ensuring consistent performance and dependability for our clients' },
    { imageSrc: FastIconImage, title: "Fast",description:'Our operations are streamlined for maximum efficiency, delivering fast and timely results without compromising quality.'  },
    { imageSrc: SimpleIconImage, title: "Easy" ,description:'Our solutions are designed for simplicity, offering an easy and intuitive experience for users of all skill levels.' }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
