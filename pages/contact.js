/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import ContactInfoCard from '../components/ContactInfoCard/ContactInfoCard';
import { labels } from '../labels';

const Contact = ({ contact }) => {
  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        <p>{labels.contacto}</p>
      </div>
      <div className="grid grid-cols-4 gap-11 px-8 py-28">
        <div className="bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
        
            <div>
              <i className="fa-solid fa-location-dot text-2xl mr-2 text-red-500"></i>
              <a href={`${contact.linkMap}`} target="_blank" rel="noopener noreferrer">
                {contact.address}
              </a>
            </div>
       
        </div>

        <div className="bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <i className="fa-brands fa-whatsapp text-2xl mr-2 text-red-500"></i>
          {contact.whatsapp1}
        </div>

        <div className="bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <i className="fa-brands fa-whatsapp text-2xl mr-2 text-red-500"></i>
          {contact.whatsapp2}
        </div>

        <div className="bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <i className="fa-brands fa-facebook text-2xl mr-2 text-red-500"></i>
          {contact.facebook}
        </div>

        <div className="bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <i className="fa-brands fa-instagram text-2xl mr-2 text-red-500"></i>
          {contact.insragram}
        </div>

        <div className="bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <i className="fa-regular fa-clock text-2xl mr-2 text-red-500"></i>
          {contact.opening1}
        </div>
      </div>
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