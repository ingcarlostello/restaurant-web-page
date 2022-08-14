/* eslint-disable @next/next/no-img-element */
import React from "react";
import { labels } from "../labels";

const Contact = ({ contact }) => {

  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        <p>{labels.contacto}</p>
      </div>
      <div className="cursor-pointer md:grid grid-cols-3 lg:grid grid-cols-4 gap-11 px-8 py-28">

        <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <div className="text-center">
            <i className="fa-solid fa-location-dot text-2xl mr-2 text-red-500"></i>
            <div>
              <a
                href={`${contact.linkMap}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.address}
              </a>
            </div>
          </div>
        </div>

        {contact.whatsapp1 === "0" || contact.whatsapp2 === null ? null : (
          <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg text-center">
            <div>
              <i className="fa-brands fa-whatsapp text-2xl mr-2 text-red-500"></i>
            </div>
            <div>
              <a
                href={`https://wa.me/${contact.whatsapp1}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.whatsapp1}
              </a>
            </div>
          </div>
        )}

        {contact.whatsapp2 === "0" || contact.whatsapp2 === null ? null : (
          <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg text-center">
            <div>
              <i className="fa-brands fa-whatsapp text-2xl mr-2 text-red-500"></i>
            </div>
            <div>
              <a
                href={`https://wa.me/${contact.whatsapp2}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.whatsapp2}
              </a>
            </div>
          </div>
        )}

        <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <a
            href={`${contact.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook text-2xl mr-2 text-red-500"></i>
          </a>
        </div>

        {contact.instagram === '' || contact.instagram === undefined ? null : (<div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg flex items-center justify-center">
          <a
            href={`${contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram text-2xl mr-2 text-red-500"></i>
          </a>
        </div>)
        
        }
        

        {contact.opening1 && (
          <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg text-center">
            <div>
              <i className="fa-regular fa-clock text-2xl mr-2 text-red-500"></i>
            </div>
            <div>
              {contact.opening1}
            </div>
          </div>
        )}

        {contact.opening2 && (
          <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg text-center">
            <div>
              <i className="fa-regular fa-clock text-2xl mr-2 text-red-500"></i>
            </div>
            <div>
              {contact.opening2}
            </div>
          </div>
        )}

        {contact.opening3 && (
          <div className="cursor-pointer mb-8 bg-white p-4 rounded-lg drop-shadow-lg text-center">
            <div>
              <i className="fa-regular fa-clock text-2xl mr-2 text-red-500"></i>
            </div>
            <div>
              {contact.opening3}
            </div>
          </div>
        )}
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
