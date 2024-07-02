import cloudIconSrc from 'images/spartan/cloud-illustrations.svg';
import softwareIconSrc from 'images/spartan/programming-illustrations.svg';
import consultIconSrc from 'images/support-illustration.svg';
import aiIconSrc from 'images/ai-illustration.svg';
import styled from 'styled-components';
import tw from 'twin.macro';

import {
  ReactComponent as SvgDotPatternIcon,
} from '../../images/dot-pattern.svg';
import { SectionHeading as HeadingTitle } from '../misc/Headings.js';

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,  
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-7/3 flex-shrink-0 h-80 md:h-160 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-orange-spartan1 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-orange-spartan1`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-orange-spartan1 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-orange-spartan1 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-orange-spartan1 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-orange-spartan1 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:softwareIconSrc,
      subtitle: "",
      title: "Software Development",
      description:
        "Transform Your Business with Cutting-Edge Software Development Solutions. Our team of expert developers leverages the latest technologies to deliver custom software that is tailored to meet the unique needs of your business. From web and mobile applications to complex software systems, we have the experience and expertise to help you achieve your goals. Say goodbye to outdated systems and hello to seamless, efficient processes.",
      url: "/Services"
    },
    {
      imageSrc: aiIconSrc ,
      subtitle: "",
      title: "AI Empowerment Consulting",
      description:
        "Whether it's through custom-built AI models or integrating next-generation conversational AI into your operations, our team stands ready to lead your digital charge. Sencilla Consultancy Services is synonymous with excellence in AI consultancy, providing you with the insights and tools necessary for a competitive edge in a digital-first world.",
        url: "/Services"
    },
    {
      imageSrc:cloudIconSrc,
      subtitle: "",
      title: "Cloud Services",
      description:
        "Take Your Solutions to the Clouds with Our Reliable Cloud Services. In today's fast-paced digital world, having a secure and scalable infrastructure is key to ensuring the success of your social website. Our cloud services provide you with the peace of mind you need to focus on what really matters building strong relationships with your users and customers. We can help you take your business to the next level.",
        url: "/Services"
    },

    {
      imageSrc: consultIconSrc ,
      subtitle: "",
      title: "IT Consulting Services",
      description:
        "Maximize Your Business Success with Trusted Consulting Services. We understand that navigating the challenges of running a business can be overwhelming. That's why we offer comprehensive consulting services that help you make informed decisions and achieve your goals. Our team of experienced consultants will work closely with you to assess your current situation, identify areas for improvement, and develop a customized action plan. From strategy to execution, we are here to help you succeed.",
        url: "/Services"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Our Services</HeadingTitle> 
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url}>Learn more</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
