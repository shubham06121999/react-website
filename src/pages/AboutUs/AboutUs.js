import React from 'react';

import MainFeature1 from 'components/features/TwoColWithButton.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import SEO from '../../components/SEO/SEO'
import BackgroundAsImageWithCenteredContent
  from '../../components/hero/BackgroundAsImageWithCenteredContent';
import backgroundImage from '../../images/spartan/consulting-3055703_1920.png';

import visionImage from '../../images/spartan/business-3731324_640.jpg';
import aboutUsImage from '../../images/spartan/desk-1220052_640.jpg';
import solutionImage from '../../images/spartan/problem-6609450_640.jpg';
import partnerImage from '../../images/spartan/success-2081167_640.jpg';
import logo from '../../images/spartan/spartan_app_solutions_logo3_head.png';
import descriptions from './AboutUs.json';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <>
      <SEO
        title="About Us - Sencilla Consultancy Services"
        description="Learn more about Sencilla Consultancy Services, a leading provider of bespoke technology solutions. Discover our commitment to creating cutting-edge mobile and desktop applications, providing cloud migration services, and offering professional consulting to enhance business efficiency."
        keywords="about us, company, mobile applications, desktop applications, technology solutions, cloud migration, professional consulting"
      />
      <AnimationRevealPage>
        <BackgroundAsImageWithCenteredContent
          headingText="About Us"
          logo={logo}
          backgroundImage={backgroundImage}
        />

        {Object.keys(descriptions).map((key, index) => {
          let imageSrc;
          switch (key) {
            case 'aboutUs':
              imageSrc = aboutUsImage;
              break;
            case 'solution':
              imageSrc = solutionImage;
              break;
            case 'partnering':
              imageSrc = partnerImage;
              break;
            case 'vision':
              imageSrc = visionImage;
              break;
            default:
              imageSrc = '';
          }

          return (
            <MainFeature1
              key={index}
              subheading={(key === 'aboutUs' || key === 'vision') && <Subheading>{descriptions[key].heading}</Subheading>}
              heading={descriptions[key].heading}
              buttonRounded={descriptions[key].buttonRounded}
              imageSrc={imageSrc}
              description={descriptions[key].description}
              textOnLeft={descriptions[key].textOnLeft}
            />
          );
        })}
        <Footer />
      </AnimationRevealPage>
    </>
  );
};
