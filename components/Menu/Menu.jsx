/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

const Menu = () => {
    return (
      <>
        <div className="gap-7 flex flex-row flex-wrap justify-center content-start items-start mx-36 my-36">
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">
                Perros Calientes
              </h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/perro1.jpg"
              alt="perro"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">Pizzas</h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/pizza1.jpg"
              alt="perro"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">Pollo</h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/pollo1.jpg"
              alt="perro"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 h-80 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">Hamburguesas</h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/hamburguesa1.jpg"
              alt="perro"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 h-80 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">Carnes</h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/carne1.jpg"
              alt="perro"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 h-80 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">Ensaladas</h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/ensalada1.jpg"
              alt="perro"
            />
          </div>
          <div className="flex justify-center items-center overflow-hidden shadow-lg shadow-gray-900/50 rounded-lg flex-auto w-1/4 h-80 mx-auto bg-gray-800">
            <div className="z-10 absolute text-center align-baseline ">
              <h1 className="text-white text-3xl font-bold">Bebidas</h1>
            </div>
            <img
              className="opacity-75 transition-transform rounded-lg object-cover h-80 w-full hover:ease-in duration-300 hover:scale-125"
              src="/img/bebidas1.jpg"
              alt="perro"
            />
          </div>
        </div>
      </>
    );
};

export default Menu;