import 'slick-carousel/slick/slick.css';
import React, { useState, useRef } from 'react';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import {
  Container,
  ContentWithPaddingXl,
} from 'components/misc/Layouts.js';
import { SectionDescription } from 'components/misc/Typography.js';
import { ReactComponent as QuoteIconBase } from 'images/quotes-l.svg';
import Slider from 'react-slick';
import styled from 'styled-components/macro'; //eslint-disable-line
import tw from 'twin.macro';

const PrimaryBackgroundContainer = tw(Container)`-mx-8 px-8 bg-blue-spartan2 text-gray-100`;

const HeadingContainer = tw.div``;
const Subheading = tw(SubheadingBase)`text-center text-gray-100 mb-4`;
const Heading = tw(SectionHeading)``;
const Description = tw(SectionDescription)`mx-auto text-center text-gray-300`;

const TestimonialsSlider = styled(Slider)`
  ${tw`flex mt-16 mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
const QuoteContainer = tw.div`relative`
const QuoteIcon = tw(QuoteIconBase)`absolute opacity-15 top-0 left-0 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-orange-spartan1`
const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
const CustomerImage = tw.img`w-16 h-16 rounded-full`
const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
const CustomerName = tw.span`text-lg font-semibold`
const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
const ControlsContainer = tw.div`sm:ml-auto flex`
const ControlButton = styled.button`
  ${tw`text-gray-600 hover:text-primary-700 focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;

export default ({
  subheading = "",
  heading = "",
  description = "Welcome to Sencilla Consultancy Services, a software solution consulting firm specializing in mobile, desktop, web software development, DevOps solutions, test automation, cloud migrations and modernization with Azure, and Power BI reporting services. We are a team of experienced software developers and consultants who are dedicated to helping businesses of all sizes improve their software systems",
  testimonials = [
    {
      customerName: "",
      customerProfile: "Software Development",
      imageSrc:
        "",
      quote:
        "Sencilla Consultancy Serviceshave a proven track record of global software development ranging from business line applications, military sector, electronics manufacturing, and accounting. See our growing stack of technology partners."
    },
    {
      customerName: " ",
      customerProfile: "Cloud Services",
      imageSrc:
        "",
      quote:
        "Sencilla Consultancy Services  specialize in unifying multi-cloud services.  Our certified team is your forefront for all major cloud providers."
    }, 
    {
      customerName: " ",
      customerProfile: "Consulting Services",
      imageSrc:
        "",
      quote:
        "Sencilla Consultancy Services provides consulting services in software development for mobile, web, and desktops. Our goal is to help our clients build software and guide them through digital transformation, technology, and engineering services."
    }, 
    {
      customerName: " ",
      customerProfile: "AI Consulting",
      imageSrc:
        "",
      quote:
        "Sencilla Consultancy Services is synonymous with excellence in AI consultancy, providing you with the insights and tools necessary for a competitive edge in a digital-first world. Transform your business with Sencilla Consultancy Services. Let us show you how tailored AI can redefine success for your enterprise."
    },
  ]
}) => {
  const sliderRef = useRef(null);
  const [isAutoplayOn, setIsAutoplayOn] = useState(true);

  const toggleAutoplay = () => {
    if (isAutoplayOn) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
    setIsAutoplayOn(!isAutoplayOn);
  };

  return (
    <PrimaryBackgroundContainer>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </HeadingContainer>
        <TestimonialsSlider arrows={false} ref={sliderRef} autoplay={isAutoplayOn} autoplaySpeed={3000}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index}>
              <QuoteContainer>
                <QuoteIcon />
                <Quote>
                  {testimonial.quote}
                </Quote>
              </QuoteContainer>
              <CustomerInfoAndControlsContainer>
                {/* <CustomerImage src={testimonial.imageSrc} /> */}
                <CustomerNameAndProfileContainer>
                  <CustomerName>
                    {testimonial.customerName}
                  </CustomerName>
                  <CustomerProfile>
                    {testimonial.customerProfile}
                  </CustomerProfile>
                </CustomerNameAndProfileContainer>
                <ControlsContainer>
                  <ControlButton onClick={toggleAutoplay}>
                    {isAutoplayOn ? 'Pause' : 'Play'}
                  </ControlButton>
                </ControlsContainer>
              </CustomerInfoAndControlsContainer>
            </Testimonial>
          ))}
        </TestimonialsSlider>
      </ContentWithPaddingXl>
    </PrimaryBackgroundContainer>
  );
};
