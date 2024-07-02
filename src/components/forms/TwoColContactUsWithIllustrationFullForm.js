import React, {
  useRef,
  useState,
} from 'react';

import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js';
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from 'components/misc/Headings.js';
import EmailIllustrationSrc from 'images/spartan/email-illustration.svg';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import tw from 'twin.macro';

import useEmail from '../../hooks/useEmail';

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Dropdown = tw.select`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-orange-spartan1`;
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-orange-spartan1`;
const Textarea = styled(Input).attrs({ as: 'textarea' })`
  ${tw`h-24`}
`;
const SubmitButton = tw(
  PrimaryButtonBase
)`inline-block mt-8 !bg-orange-spartan1`;

const ContactForm = ({
  subheading = 'Contact Us',
  heading = (
    <>
      Feel free to <span tw="text-orange-spartan1">get in touch</span>
      <wbr /> with us.
    </>
  ),
  description = 'Send your requirement. We will get back to you within 24 hours.',
  submitButtonText = 'Send',
  formAction = '#',
  formMethod = 'get',
  textOnLeft = true,
}) => {
  const { sendEmail } = useEmail();
  const [isFormValid, setIsFormValid] = useState(false);
  const [messageStatus, setMessageStatus] = useState('');
  const Email = process.env.REACT_APP_API_EMAIL;
  const RECAPTCHA_SITE_KEY = process.env.REACT_APP_API_KEY;

  const [formData, setFormData] = useState({
    to: Email,
    cc: '',
    subject: '',
    bodyContent: '',
    desc: '',
    attachments: [],
  });

  const recaptchaRef = useRef();

  const handleChange = (e) => {
    setMessageStatus('');
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);

    const isValid =
      newFormData.subject.trim() !== '' &&
      newFormData.bodyContent.trim() !== '' &&
      newFormData.desc.trim() !== '';

    setIsFormValid(isValid);
  };

  const handleDropdownChange = (e) => {
    setMessageStatus('');
    setFormData((prevFormData) => ({
      ...prevFormData,
      subject: e.target.value, // Set subject from dropdown value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      setMessageStatus('Please verify reCAPTCHA before submitting.');
      return;
    }

    try {
      await sendEmail({ ...formData, recaptchaValue });
      setFormData({
        to: '',
        cc: '',
        subject: '',
        bodyContent: '',
        desc: '',
        attachments: [],
      });

      setIsFormValid(false);
      setMessageStatus('Your message has been sent successfully.');
    } catch (error) {
      console.error('Error caught:', error);
    }
  };

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod} onSubmit={handleSubmit}>
            <Dropdown
                id="services"
                value={formData.subject}
                onChange={handleDropdownChange}
              >
                <option value="">Select Topic of Interest</option>
                <option value="Software Development">Software Development</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="Consulting Services">Consultancy Services</option>
                <option value="Workforce Management">Workforce Management</option>
                <option value="Maintenance and Support">Maintenance and Support</option>
              </Dropdown>
              <Textarea
                name="bodyContent"
                placeholder="Email Body"
                value={formData.bodyContent}
                onChange={handleChange}
              />
              <Textarea
                name="desc"
                placeholder="Description"
                value={formData.desc}
                onChange={handleChange}
              />
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={(value) => setIsFormValid(isFormValid && !!value)}
                style={{ marginTop: '10px' }}
              />
              <SubmitButton type="submit" disabled={!isFormValid}>
                {submitButtonText}
              </SubmitButton>
            </Form>
            {messageStatus && (
              <div tw="mt-4 text-center text-green-500">{messageStatus}</div>
            )}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};

export default ContactForm;