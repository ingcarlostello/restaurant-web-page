
import React from 'react';

// @Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Head from 'next/head';
import { useEffect } from 'react';
import { getLogoImage } from '../../helper/urls';
import { useState } from 'react';

const Layout = ({children}) => {

  const [logoImage, setLogoImage] = useState();

  useEffect(() => {
    getLogoImage().then(function (value) {
      setLogoImage(value.Logo.url);
    });
  }, []);
  
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className='min-h-screen relative'>
          <Navbar logoImage={logoImage} />
          <div className='pb-40'>{children}</div>
          <div className='absolute w-full bottom-0 right-0'>
            <Footer />
          </div>
        </div>
      </div>
    );
};

export default Layout;