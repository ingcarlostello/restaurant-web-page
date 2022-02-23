import { useRouter } from "next/router";
import React from "react";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";

import { getListOfFood, getUrlProduct } from "../../../helper/urls";

const Detail = ({ burgersList, hotDogsList, drinksList }) => {

  const router = useRouter();

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
              productName={burger.burgerName}
              productDescription={burger.description}
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
            />
          )
      );
  }

   return (
     <>
       <p>desde detalles</p>
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
