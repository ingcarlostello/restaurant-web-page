/* eslint-disable @next/next/no-img-element */
import React from 'react';

// @Material UI
import {  Rating } from '@mui/material';
import Link from 'next/link';
import { currency } from '../../helper/currency';

const Card = ({ urlProduct, nameProduct, photo, average, price }) => {

    console.log('promedio', average?.toFixed(1));
  
  return (
    <>
      <div className="mb-6 mx-6 rounded-lg w-64 shadow-lg hover:shadow-xl transition duration-500">
        <div className="rounded-lg flex justify-center items-center">
          <div className="rounded-t-lg h-56 w-full flex justify-center items-center overflow-hidden">
            <img
              className="object-cover h-56 w-full"
              src={`${process.env.NEXT_PUBLIC_API_URL}${photo}`}
              alt=""
            />
          </div>
        </div>
        <div className="pt-2 pb-4 px-4 h-auto">
          <div>
            <h1 className="text-base text-gray-700 font-bold hover:text-gray-900 hover:cursor-pointer mb-2">
              {nameProduct}
            </h1>
            <div className="flex justify-center">
              <span className="mr-2">
                <Rating
                  name="half-rating-read"
                  defaultValue={average}
                  precision={0.1}
                  readOnly
                />
              </span>
              <span>{isNaN(average) ? '' : average?.toFixed(1) }</span>
            </div>
            <p className="text-xl text-center font-bold text-gray-700 ">
              {currency(price)}
            </p>
            <div className="text-center mt-4">
              <Link href={`detail/${urlProduct}`} passHref>
                <button
                  className="bg-red-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Ver mas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;