import React from 'react';
import  SEO  from 'components/SEO/SEO'
import Features from 'components/features/DashedBorderSixFeatures';
import Footer from 'components/footers/MiniCenteredFooter.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';

import BackgroundAsImageWithCenteredContent
  from '../components/hero/BackgroundAsImageWithCenteredContent';
import backgroundImage from '../images/spartan/business-5475661_1280.jpg';
import logo from '../images/spartan/spartan_app_solutions_logo3_head.png';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <>
      <SEO
        title="Services - Sencilla Consultancy Services"
        description="Explore Sencilla Consultancy Services' comprehensive services, including cutting-edge mobile and desktop application development, cloud migration services, and professional consulting to streamline your digital transformation."
        keywords= "mobile application development, desktop application development, cloud migration, digital transformation, professional consulting"
      />
    <AnimationRevealPage> 
      <BackgroundAsImageWithCenteredContent  headingText = "Services" logo={logo} backgroundImage={backgroundImage}/> 
      <Features />
      <Footer />
    </AnimationRevealPage>
    </>
  );
};
