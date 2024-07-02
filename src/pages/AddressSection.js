import React from 'react';
import tw from 'twin.macro';

const AddressContainer = tw.div`mt-10`;
const Address = tw.div`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

const AddressSection = ({ addresses }) => {
  return (
    <AddressContainer>
      {addresses.map((address, index) => (
        <Address key={index}>
          {address.lines.map((line, idx) => (
            <AddressLine key={idx}>{line}</AddressLine>
          ))}
          <Email>{address.email}</Email>
          <Phone>{address.phone}</Phone>
        </Address>
      ))}
    </AddressContainer>
  );
};

export default AddressSection;
