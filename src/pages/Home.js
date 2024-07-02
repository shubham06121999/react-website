import React from 'react';

import FeaturesThreeCol from 'components/features/ThreeColWithSideImage.js';
import Features from 'components/features/VerticalWithAlternateImageAndText.js';
import Footer from 'components/footers/MiniCenteredFooter';
import Testimonial from 'components/testimonials/SimplePrimaryBackground.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import  SEO  from 'components/SEO/SEO'

import BackgroundAsImageWithCenteredContent
  from '../components/hero/BackgroundAsImageWithCenteredContent';
import logo from '../images/spartan/spartan_app_solutions_logo3_head.png';
import backgroundImage from '../images/spartan/technology-6701504_1920.jpg';

const HighlightedText = tw.span`text-orange-spartan1`;
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <>
      <SEO
        title="Sencilla Consultancy Services - Tailored Mobile and Desktop Applications"
        description="Sencilla Consultancy Services specializes in creating cutting-edge mobile and desktop applications tailored to meet your business needs. Discover how our bespoke technology solutions can enhance your business efficiency."
        keywords= "mobile applications, desktop applications, technology solutions, business efficiency, digital transformation, cloud migration services, professional consulting"
      />
      <AnimationRevealPage>
        <BackgroundAsImageWithCenteredContent
          logo={logo}
          HireUs={true}
          headingText="We are consultant <br /> We Provide Solutions"
          backgroundImage={backgroundImage}
        />
        <FeaturesThreeCol
          subheading={<Subheading></Subheading>}
          heading={
            <>
              We have Amazing <HighlightedText>Support.</HighlightedText>
            </>
          }
        />
        <Features />
        <Testimonial />
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
