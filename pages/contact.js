import React from 'react';
import { labels } from '../labels';

const Contact = ({ contact }) => {

  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        <p>{labels.contacto}</p>
      </div>
      <p>{contact.address}</p>
      <p>{contact.whatsapp1}</p>
      <p>{contact.whatsapp2}</p>
      <p>{contact.whatsapp3}</p>
      <p>{contact.facebook}</p>
      <p>{contact.instagram}</p>
      <p>{contact.opening1}</p>
      <p>{contact.opening2}</p>
    </>
  );
};

export async function getStaticProps() {
  const url = `${process.env.API_URL}/contact`;
  const response = await fetch(url);
  const contact = await response.json();
  return {
    props: {
      contact,
    },
  };
}

export default Contact;