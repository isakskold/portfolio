import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: auto; /* Pushes the Contact component to the bottom */
`;

const ContactOption = styled.p``;

const contacts = [
  { label: "Email", info: "isakskold@live.se" },
  { label: "LinkedIn", info: "linkedin.com/in/johndoe" },
  { label: "GitHub", info: "github.com/isakskold" },
];

const Contact = () => {
  return (
    <Wrapper>
      {contacts.map((contact, index) => (
        <ContactOption key={index}>
          <strong>{contact.label}:</strong> {contact.info}
        </ContactOption>
      ))}
    </Wrapper>
  );
};

export default Contact;
