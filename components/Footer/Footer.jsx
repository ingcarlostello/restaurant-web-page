import React from 'react';

const Footer = () => {
    return (
      <>
        {/* <section className="mt-28 absolute inset-x-0 bottom-0 py-10 bg-gradient-to-r from-red-700 to-red-800 font-nunito"> */}
        <footer className='footer-1 bg-gradient-to-r from-red-700 to-red-800 font-nunito py-8 sm:py-12'>
          <div className="container px-4 mx-auto">
            <div className="md:flex justify-between">
              <p className="text-lg text-gray-200 mb-8 md:mb-0">
                &copy; 2021 Shuffle. All rights reserved.
              </p>
              <div className="flex items-center">
                <i className="fa-brands fa-whatsapp text-2xl mr-2 text-white"></i>
                <i className="fa-brands fa-facebook text-2xl mr-2 text-white"></i>
                <i className="fa-brands fa-instagram text-2xl mr-2 text-white"></i>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;