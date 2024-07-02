import React from 'react';

import Footer from 'components/footers/MiniCenteredFooter.js';
import ContactUsForm
  from 'components/forms/TwoColContactUsWithIllustrationFullForm.js';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import tw from 'twin.macro';
import  SEO  from 'components/SEO/SEO'
import BackgroundAsImageWithCenteredContent
  from '../components/hero/BackgroundAsImageWithCenteredContent';
import backgroundImage from '../images/spartan/contact-4045623_1920.jpg';
import logo from '../images/spartan/spartan_app_solutions_logo3_head.png';
import AddressSection from './AddressSection';

const addresses = [
  {
    lines: ["Office no. 14, Krishna Prestige", "opp. Jay Ambe Hospital, Mira Road East", "Mira Bhayandar, Maharashtra 401107"],
  },
  {
    lines: ["123 Business Road", "Suite 200", "Business City, BC 12345"],
    email: "contact@business.com",
    phone: "(123) 456-7890"
  }
  
];
 
export default () => {
  return (
    <>
      <SEO
        title="Contact Us - Sencilla Consultancy Services"
        description="Get in touch with Sencilla Consultancy Services to learn more about our tailored technology solutions. Our expert team is here to assist you with your mobile and desktop application needs, cloud migration services, and digital transformation consulting."
        keywords= "contact, get in touch, mobile applications, desktop applications, cloud migration, digital transformation, consulting"
      />
    <AnimationRevealPage>
    <BackgroundAsImageWithCenteredContent  headingText = "Contact Us" logo={logo} backgroundImage={backgroundImage}/> 
      <ContactUsForm />
      <AddressSection addresses={addresses} />
      <Footer />
    </AnimationRevealPage>
    </>
  );
};
