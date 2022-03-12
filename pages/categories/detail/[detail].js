import { useRouter } from "next/router";
import React, { useState } from "react";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import Reviews from "../../../components/Reviews/Reviews";

import { getListOfFood, getUrlProduct } from "../../../helper/urls";

const Detail = ({ burgersList, hotDogsList, drinksList }) => {

  const router = useRouter();

   const [toggleModal, setToggleModal] = useState(true);

   const openModal = () => {
     if (toggleModal) {
       setToggleModal(false);
     } else {
       setToggleModal(true);
     }
   };

   const nameProduct = (name) => {
     return name === router.query.detail;
   };

  
  const productsNames = () => {
    const burgerListNames = burgersList.map(getUrlProduct);
    const hotDogsListNames = hotDogsList.map(getUrlProduct);
    const drinksListNames = drinksList.map(getUrlProduct);

    const nameBurger = burgerListNames.find(nameProduct);
    const nameHotDog = hotDogsListNames.find(nameProduct);
    const nameDrink = drinksListNames.find(nameProduct)
   
    return {
      nameBurger,
      nameHotDog,
      nameDrink
    };
  };

  const respu = productsNames();

  switch (router.query.detail) {
    case respu.nameBurger:
      return burgersList.map(
        (burger) =>
          respu.nameBurger === burger.urlFood && (
            <ProductDetail
              key={burger.id}
              photo={burger.photo.url}
              productDescription={burger.description}
              productId={burger.id}
              productName={burger.burgerName}
            />
          )
      );

    case respu.nameHotDog:
      return hotDogsList.map(
        (hotDog) =>
          respu.nameHotDog === hotDog.urlFood && (
            <ProductDetail
              key={hotDog.id}
              productName={hotDog.hotDogName}
              productDescription={hotDog.description}
              photo={hotDog.photo.url}
              productId={hotDog.id}
            />
          )
      );

    case respu.nameDrink:
      return drinksList.map(
        (drink) =>
          respu.nameDrink === drink.urlFood && (
            <ProductDetail
              key={drink.id}
              productName={drink.drinkName}
              productDescription={drink.description}
              photo={drink.photo.url}
            />
          )
      );
  }

   return (
     <>
     <h1>holaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
       <Reviews
         toggleModal={toggleModal}
         openModal={openModal}
         productId={3}
       />
     </>
   );
  
};

export async function getServerSideProps() {
  // const burgersList = await getListOfFood(`${process.env.API_URL}/burgers`);
  // const hotDogsList = await getListOfFood(`${process.env.API_URL}/hot-dogs`);

  const [burgersList, hotDogsList, drinksList] = await Promise.all([
    getListOfFood(`${process.env.API_URL}/burgers`),
    getListOfFood(`${process.env.API_URL}/hot-dogs`),
    getListOfFood(`${process.env.API_URL}/drinks`),
  ]);

  return {
    props: {
      burgersList,
      hotDogsList,
      drinksList
    },
  };
}

export default Detail;
