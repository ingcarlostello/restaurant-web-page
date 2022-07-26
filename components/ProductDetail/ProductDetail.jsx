/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';

// @Material UI
import { Rating } from '@mui/material';

// @Components
import Comment from '../Comments/Comment';
import Reviews from '../Reviews/Reviews';


const ProductDetail = ({
  average,
  category,
  photo,
  price,
  productDescription,
  productId,
  productName,
  reviews,
}) => {
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
            <img className='rounded-lg' src={`${process.env.NEXT_PUBLIC_API_URL}${photo}`} />
          </div>
        </div>
        <div>
          <div className="p-20">
            <div>
              <h1 className="text-5xl font-bold">{productName}</h1>
              <p className="text-3xl mt-4">$ {price}</p>
              <div className="mt-4 flex">
                <span>
                  <Rating
                    defaultValue={average}
                    name="half-rating-read"
                    precision={0.1}
                    readOnly
                  />
                </span>
                <span className="ml-2">{isNaN(average) ? '' : average?.toFixed(1) }</span>
              </div>
              <p className="mt-8 whitespace-pre-line">{productDescription}</p>
              <div className="mt-12">
                <button
                  className="bg-red-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={openModal}
                >
                  Escribir Reseña
                </button>
                <Reviews
                  category={category}
                  openModal={openModal}
                  productId={productId}
                  toggleModal={toggleModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-2 overflow-y-auto h-96 w-3/5 ml-2 rounded-lg ">
        {reviews?.map((infoReview) => (
          <Comment
            clientName={infoReview.clientName}
            description={infoReview.reviews}
            key={infoReview.id}
            points={infoReview.points}
            titleReview={infoReview.title}
          />
        ))}
      </div>
    </>
  );
};

export default ProductDetail;