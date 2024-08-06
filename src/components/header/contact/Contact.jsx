import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: auto; /* Pushes the Contact component to the bottom */

  @media (max-width: 300px) {
    margin: 0;
  }
`;

const ContactOption = styled.p`
  margin: 0; /* Remove default margin for better alignment */
`;

const contacts = [
  { label: "Email", info: "isaksfrontend@gmail.com" },
  {
    label: "LinkedIn",
    info: "linkedin.com/in/isaksköld",
    url: "https://www.linkedin.com/in/isak-sk%C3%B6ld-3b7a0b28a/",
  },
  {
    label: "GitHub",
    info: "github.com/isakskold",
    url: "https://github.com/isakskold",
  },
];

const Contact = () => {
  return (
    <Wrapper>
      {contacts.map((contact, index) => (
        <ContactOption key={index}>
          <strong>{contact.label}:</strong>{" "}
          {contact.url ? (
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              {contact.info}
            </a>
          ) : (
            contact.info
          )}
        </ContactOption>
      ))}
    </Wrapper>
  );
};

export default Contact;
