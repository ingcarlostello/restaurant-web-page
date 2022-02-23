import React from 'react';

const Footer = () => {
    return (
        <>
            <section className="py-20 2xl:py-40 bg-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
                        <div className="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
                            <span className="text-lg text-blue-400 font-bold">We&apos;re Zospace</span>
                            <h2 className="max-w-sm mt-8 mb-12 text-5xl text-white font-bold font-heading">Thank you for your time</h2>
                            <p className="mb-16 text-gray-300">The brown fox jumps over the lazy dog.</p>
                            <div><a className="inline-block mb-4 sm:mb-0 sm:mr-4 py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200" href="#">Active demo</a><a className="inline-block px-12 py-4 text-white font-bold border border-gray-200 hover:border-white rounded-full" href="#">Contact</a></div>
                        </div>
                        <div className="w-full lg:w-3/5 px-4">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                                    <ul className="text-lg">
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Inicio</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Menu</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Sobre Nosotros</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Contacto</a></li>
                                        <li><a className="text-gray-200 hover:text-gray-100" href="#">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                                    <ul className="text-lg">
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">WhatsApp1</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">direccion restaurante</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">linea fija</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">linea celular</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">correo@corre.com</a></li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/3 px-4">
                                    <ul className="text-lg">
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Facebook</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Instagram</a></li>
                                        <li className="mb-6"><a className="text-gray-200 hover:text-gray-100" href="#">Twitter</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-between">
                        <p className="text-lg text-gray-200 mb-8 md:mb-0">&copy; 2021 Shuffle. All rights reserved.</p>
                        <div className="flex items-center">
                            {/* <a className="inline-block mr-2" href="#">
          <img className="h-12" src="zospace-assets/logos/facebook.svg" alt="">
        </a>
        <a className="inline-block mr-2" href="#">
          <img className="h-12" src="zospace-assets/logos/instagram.svg" alt="">
        </a>
        <a className="inline-block" href="#">
          <img className="h-12" src="zospace-assets/logos/twitter.svg" alt="">
        </a> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;