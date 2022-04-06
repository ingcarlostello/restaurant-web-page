import React, { useState } from "react";

// @Material UI
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

import { useRouter } from "next/router";

const Reviews = ({ openModal, toggleModal, productId, category }) => {




  const [reviewForm, setReviewForm] = useState({
    clientName: "",
    title: "",
    description: "",
    value: 0,
    burger: {
      id: productId,
    },
    hot_dog: {
      id: productId
    }
  });

  const { description, value, title, clientName } = reviewForm;

  const handleChange = (e) => {
    setReviewForm({
      ...reviewForm,
      [e.target.name]: e.target.value,
    });
  };

  const cancelModal = () => {
    openModal();
    setReviewForm({
      clientName: "",
      title: "",
      description: "",
      value: null,
      burger: {
        id: null,
      },
      hot_dog: {
        id: null,
      },
    });
  };

  const sendReview = async (review) => {
    if (category === 'hamburguesas') {
      const feedback = fetch("http://localhost:1337/review-burgers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(review),
      });
      setReviewForm({
        clientName: "",
        title: "",
        description: "",
        value: null,
        burger: {
          id: null,
        },
      });
      openModal();
    };
    
    if (category === 'perros') {
      const feedback = fetch("http://localhost:1337/review-hot-dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(review),
      });
      setReviewForm({
        clientName: "",
        title: "",
        description: "",
        value: null,
        hot_dog: {
          id: null,
        },
      });
      openModal();
    }
     
  };

  return (
    <>
      <div
        className={`${
          toggleModal
            ? "fixed z-10 inset-0 overflow-y-auto"
            : "fixed z-10 inset-0 overflow-y-auto hidden"
        }`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={`${
              toggleModal
                ? "animate__animated animate__zoomIn inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                : "animate__animated animate__zoomOut"
            }`}
          >
            <div>
              <div className="text-center text-gray-500 text-3xl bg-gray-200 pr-4 py-4">
                Escribe una Reseña
              </div>
              {/* <div className="bg-red-300 text-center text-gray-600">Todos los campos son obligatorios</div> */}
              {/* {error && mensaje} */}
              <div className="bg-gray-100">
                <div className="mb-4 px-4 pt-4">
                  <input
                    className="p-2 bg-white border border-gray-300 rounded-md shadow-sm w-1/2 pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="clientName"
                    onChange={handleChange}
                    placeholder="Nombre *"
                    type="text"
                    value={clientName}
                  />
                  <Box className="float-right">
                    <p className="font-bold">Califica *</p>
                    <Rating
                      name="value"
                      value={Number(value)}
                      onChange={handleChange}
                    />
                  </Box>
                </div>

                <div className="mb-4 px-4">
                  <input
                    className="p-2 bg-white border border-gray-300 rounded-md shadow-sm w-1/2 pl-3 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    name="title"
                    onChange={handleChange}
                    placeholder="Titulo Reseña *"
                    type="text"
                    value={title}
                  />
                </div>

                <div className="px-4">
                  <textarea
                    className="p-2 bg-white border border-gray-300 rounded-md shadow-sm pl-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize border rounded-md w-full h-24"
                    name="description"
                    onChange={handleChange}
                    placeholder="Comentarios *"
                    value={description}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <Button
                size="small"
                onClick={() => sendReview(reviewForm)}
                variant="contained"
                disabled={!description || !clientName || !value || !title}
              >
                Enviar Reseña
              </Button>

              <div className="mr-4">
                <Button
                  size="small"
                  onClick={cancelModal}
                  variant="contained"
                  color="error"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
