/* eslint-disable @next/next/no-img-element */
import { Rating } from '@mui/material';
import React from 'react';

const ProductDetail = ({ productName, productDescription }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className="p-20">
            <img src="/img/hamburguesa1.jpg" />
          </div>
        </div>
        <div>
          <div className="p-20">
            <div>
              <h1 className="text-5xl font-bold">{productName}</h1>
              <p className="text-3xl mt-4">$ 25.000</p>
              <div className="mt-4 flex">
                <span>*****</span>
                <span className="ml-2">4.8</span>
              </div>
              <p className="mt-8">{productDescription}</p>
              <div className="mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;