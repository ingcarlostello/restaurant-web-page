import React, { useState } from "react";

// @Nextjs
import { useRouter } from "next/router";

// @Components
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import Reviews from "../../../components/Reviews/Reviews";

// @Helpers
import { getListOfFood, getUrlProduct } from "../../../helper/urls";
import { sumaEstrellas } from "../../../helper/starAverage";

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
    const burgerListNames   = burgersList.map(getUrlProduct);
    const hotDogsListNames  = hotDogsList.map(getUrlProduct);
    const drinksListNames   = drinksList.map(getUrlProduct);

    const nameBurger  = burgerListNames.find(nameProduct);
    const nameHotDog  = hotDogsListNames.find(nameProduct);
    const nameDrink   = drinksListNames.find(nameProduct)
   
    return {
      nameBurger,
      nameHotDog,
      nameDrink
    };
  };

  const respu = productsNames();

  const allDataBurger = burgersList.map((burger) => {
    let infoBurger = {
      category: burger.category.urlCategory,
      description: burger.description,
      photo: burger.photo.url,
      id: burger.id,
      name: burger.burgerName,
      price: burger.price,
      urlFood: burger.urlFood,
      points: burger.review_burgers.map((stars) => {
        return stars.value;
      }),
      reviews: burger.review_burgers.map((reviews) => {
        return {
          reviews: reviews.description,
          points: reviews.value,
          title: reviews.title,
          clientName: reviews.clientName
        };
      }),
    };
    let suma = infoBurger.points.reduce(sumaEstrellas);
    let promedio = suma / infoBurger.points.length;

    infoBurger.promedio = promedio;
    return infoBurger;
  });

   const allDataHotDogs = hotDogsList.map((hotDog) => {
     let infoHotDog = {
       category: hotDog.category.urlCategory,
       description: hotDog.description,
       photo: hotDog.photo.url,
       id: hotDog.id,
       name: hotDog.burgerName,
       price: hotDog.price,
       urlFood: hotDog.urlFood,
       points: hotDog.review_hot_dogs?.map((stars) => {
         return stars.value;
       }),
       reviews: hotDog.review_hot_dogs?.map((reviews) => {
         return {
           reviews: reviews.description,
           points: reviews.value,
           title: reviews.title,
           clientName: reviews.clientName,
         };
       }),
     };
     let suma = infoHotDog.points.length > 0 && infoHotDog.points?.reduce(sumaEstrellas);
     let promedio = suma / infoHotDog.points?.length;

     infoHotDog.promedio = promedio;
     return infoHotDog;
   });


     const allDataDrinks = drinksList.map((drink) => {
       let infoDrink = {
         category: drink.category.urlCategory,
         description: drink.description,
         photo: drink.photo.url,
         id: drink.id,
         name: drink.drinkName,
         price: drink.price,
         urlFood: drink.urlFood,
         points: drink.review_drinks?.map((stars) => {
           return stars.value;
         }),
         reviews: drink.review_drinks?.map((reviews) => {
           return {
             reviews: reviews.description,
             points: reviews.value,
             title: reviews.title,
             clientName: reviews.clientName,
           };
         }),
       };
       let suma =
         infoDrink.points.length > 0 &&
         infoDrink.points?.reduce(sumaEstrellas);
       let promedio = suma / infoDrink.points?.length;

       infoDrink.promedio = promedio;
       return infoDrink;
     });

  switch (router.query.detail) {
    case respu.nameBurger:
      return allDataBurger.map(
        (burger) =>
          respu.nameBurger === burger.urlFood && (
            <ProductDetail
              average={burger.promedio}
              category={burger.category}
              key={burger.id}
              photo={burger.photo}
              price={burger.price}
              productDescription={burger.description}
              productId={burger.id}
              productName={burger.name}
              reviews={burger.reviews}
            />
          )
      );

 
    case respu.nameHotDog:
      return allDataHotDogs.map(
        (hotDog) =>
          respu.nameHotDog === hotDog.urlFood && (
            <ProductDetail
              category={hotDog.category}
              key={hotDog.id}
              photo={hotDog.photo}
              productDescription={hotDog.description}
              productId={hotDog.id}
              productName={hotDog.name}
              reviews={hotDog.reviews}
              price={hotDog.price}
              average={hotDog.promedio}
            />
          )
      );

    case respu.nameDrink:
      return allDataDrinks.map(
        (drink) =>
          respu.nameDrink === drink.urlFood && (
            <ProductDetail
               category={drink.category}
              key={drink.id}
              photo={drink.photo}
              productDescription={drink.description}
              productId={drink.id}
              productName={drink.name}
              reviews={drink.reviews}
              price={drink.price}
              average={drink.promedio}
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
