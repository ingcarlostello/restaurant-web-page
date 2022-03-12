/* eslint-disable @next/next/no-img-element */
import { Rating } from '@mui/material';
import Button from "@mui/material/Button";
import React, { useState } from 'react';
import Reviews from '../Reviews/Reviews';
//import { useRouter } from "next/router";

const ProductDetail = ({
  photo,
  productDescription,
  productId,
  productName,
}) => {
  //const router = useRouter();

  const [toggleModal, setToggleModal] = useState(false);

  const openModal = () => {
    if (toggleModal) {
      setToggleModal(false);
    } else {
      setToggleModal(true);
    }
  };


  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <div className="p-20">
            <img src={`${process.env.NEXT_PUBLIC_API_URL}${photo}`} />
          </div>
        </div>
        <div>
          <div className="p-20">
            <div>
              <h1 className="text-5xl font-bold">{productName}</h1>
              <p className="text-3xl mt-4">$ 25.000</p>
              <div className="mt-4 flex">
                <Rating
                  name="half-rating-read"
                  defaultValue={3.8}
                  precision={0.1}
                  readOnly
                />
              </div>
              <p className="mt-8 whitespace-pre-line">{productDescription}</p>
              <div className="mt-12">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={openModal}
                >
                  Escribir Reseña
                </button>
                <Reviews
                  toggleModal={toggleModal}
                  openModal={openModal}
                  productId={productId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;