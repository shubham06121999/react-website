import React from 'react';

import { SectionHeading } from 'components/misc/Headings.js';
import styled from 'styled-components';
import tw from 'twin.macro';

import AnalyticsIconImage
  from '../../images/spartan/analytics-orange-illustration.svg';
import CloudIconImage from '../../images/spartan/cloud-orange-illustration.svg';
import ConsultIconImage
  from '../../images/spartan/consult-orange-illustration.svg';
import DevOpsIconImage
  from '../../images/spartan/devops-orange-illustration.svg';
import OpenAiIconImage
  from '../../images/spartan/openai-orange-illustration.svg';
import SoftwareIconImage
  from '../../images/spartan/software-orange-illustration.svg';
import {
  ReactComponent as SvgDecoratorBlob3,
} from '../../images/svg-decorator-blob-3.svg';

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-orange-spartan1 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-orange-spartan1 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-orange-spartan1`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;
const Link = tw.a`inline-block mt-4 text-sm text-orange-spartan1 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-orange-spartan1`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {

  const cards = [
    {
      imageSrc: SoftwareIconImage,
      title: "Software Development",
      description:
        "Our team of experienced developers offers customized software solutions to streamline your operations, increase productivity, and give you a competitive edge. We utilize the latest technologies and best practices, and our agile development process ensures that you have complete control over the project.",
      url: "/Software",
    },
    {
      imageSrc: OpenAiIconImage,
      title: "Artificial Intelligence",
      description: "Welcome to the forefront, where artificial intelligence converges with bespoke business strategy. At Sencilla Consultancy Services, we are on a mission to empower organizations through bespoke AI model development and the strategic integration of advanced third-party APIs, including ChatGPT. With a pioneering spirit, we navigate the complex terrain of digital transformation, guiding your business not just to adapt, but to thrive amidst the ever-evolving landscape. Let us lead the way to your organization success in the digital age.",
      url: "/Openai",
    },
    {
      imageSrc: CloudIconImage,
      title: "Cloud Services",
      description:
        "Our cloud services offer secure, scalable, and flexible solutions for your business needs. Our team of experts will guide you through the entire process, from migration to management, providing customized solutions that optimize your operations and reduce costs. Trust us to take your business to the next level.",
      url: "/Cloud",
    },
    {
      imageSrc: ConsultIconImage,
      title: "Consulting Services",
      description:
        "Our consulting services provide expert guidance to help your business reach its full potential. Our team of experienced consultants offers a range of services, from strategic planning to process improvement, to help you achieve your goals. Trust us to provide customized solutions that drive growth, reduce costs, and increase efficiency.",
      url: "/Consult",
    },
    {
      imageSrc: DevOpsIconImage,
      title: "DevOps CI/CD",
      description:
        "Our DevOps CI/CD solutions streamline your software development lifecycle, improving efficiency and quality while reducing costs. Our team of experts provides customized solutions tailored to your specific needs, utilizing the latest tools and best practices to automate processes, increase collaboration, and accelerate deployment. Trust us to transform your software development process.",
      url: "/Devops",
    },
    {
      imageSrc: AnalyticsIconImage,
      title: "Analytics Services",
      description:
        "Our analytics services provide actionable insights that help you make informed decisions and optimize your operations. Our team of experts utilizes cutting-edge tools and techniques to collect, analyze, and visualize your data, identifying patterns and trends that drive growth and innovation. Trust us to unlock the full potential of your data and transform your business.",
      url: "/Analytics",
    },
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>
          Our Professional Services 
        </Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description}
                </p>
              </span>
              {/* <Link href={card.url}>Learn more</Link> */}
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
