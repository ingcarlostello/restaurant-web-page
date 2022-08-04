import React, { useEffect, useState } from "react";
import { getSocialMedia } from "../../helper/urls";

const Footer = () => {

  const [socialMedia, setSocialMedia] = useState();

  const year = new Date();

  useEffect(() => {
    getSocialMedia().then(function (value) {
      setSocialMedia(value)
    });
  }, []);
  
  return (
    <footer className="h-20 bg-red-500 absolute inset-x-0 bottom-0 w-100">
      <div className="h-full relative flex items-center">
        <div className="w-full flex place-content-around">
          <span className="text-lg text-gray-200 mb-8 md:mb-0">
            &copy; {year.getFullYear()} Shuffle. All rights reserved.
          </span>
          <span>
            <a
              href={`https://wa.me/${socialMedia?.whatsapp1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp text-2xl mr-2 text-white"></i>
            </a>
            <a
              href={`${socialMedia?.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook text-2xl mr-2 text-white"></i>
            </a>
            <a
              href={`${socialMedia?.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram text-2xl mr-2 text-white"></i>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
