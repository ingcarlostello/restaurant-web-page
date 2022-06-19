import { useRouter } from "next/router";
import React from "react";
import Card from "../../components/Card/Card";
import { sumaEstrellas } from "../../helper/starAverage";
import { getCategoryName, nameProduct } from "../../helper/urls";

const Categoria = ({
  burgersList,
  category,
  drinkList,
  hotDogsList,
}) => {
  const router = useRouter();

  const allCategories = () => {
    const burger = burgersList.map(getCategoryName);
    const hotDog = hotDogsList.map(getCategoryName);
    const drink = drinkList.map(getCategoryName);
    return {
      burger: nameProduct(burger),
      hotDog: nameProduct(hotDog),
      drink: nameProduct(drink),
    };
  };

  const respu = allCategories();

  const allDataBurger = burgersList.map((burger) => {
    let infoBurger = {
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
        return reviews.description;
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
      name: hotDog.hotDogName,
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

   const allDataDrinks = drinkList.map((drink) => {
     console.log('--->', drink);
     let infoDrink = {
       category: drink.category?.urlCategory,
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
       infoDrink.points.length > 0 && infoDrink.points?.reduce(sumaEstrellas);
     let promedio = suma / infoDrink.points?.length;

     infoDrink.promedio = promedio;
     return infoDrink;
   });

  const listado = () => {
    console.log("category.categoryName", category.categoryName);
    switch (category.categoryName) {
      case respu.burger:
        let allBurgers = allDataBurger.map((burger) => (
          <Card
            average={burger.promedio}
            key={burger.id}
            nameProduct={burger.name}
            photo={burger.photo}
            price={burger.price}
            urlProduct={burger.urlFood}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allBurgers}
          </div>
        );

      case respu.hotDog:
        let allHotDogs = allDataHotDogs.map((hotDog) => (
          <Card
            average={hotDog.promedio}
            key={hotDog.id}
            nameProduct={hotDog.name}
            photo={hotDog.photo}
            price={hotDog.price}
            urlProduct={hotDog.urlFood}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allHotDogs}
          </div>
        );

      case respu.drink:
        let allDrinks = allDataDrinks.map((drink) => 
         
          (
          <div key={drink.id} className="mt-10">
            <Card     
              average={drink.promedio}
              key={drink.id}
              nameProduct={drink.name}
              photo={drink.photo}
              price={drink.price}
              urlProduct={drink.urlFood}
            />
          </div>
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allDrinks}
          </div>
        );
    }
  };

  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        {router.query.urlCategory}
      </div>
      <div>{listado()}</div>
    </>
  );
};

export async function getStaticPaths() {
  //hago peticion get para obtener todas las categorias
  const url = `${process.env.API_URL}/categories`;
  const response = await fetch(url);
  const categories = await response.json();

  /**
   *  *luego mapeo las categorias para guardar el resultado en la propiedad "urlCategory" que es como se llama en strapi
   *  *y tambien el archivo [urlCategory].js con el fin de armar la url asi: http://localhost:1337/categories?urlCategory=carnes
   */
  const paths = categories.map((category) => ({
    params: {
      urlCategory: category.urlCategory,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { urlCategory } }) {
  const url = `${process.env.API_URL}/categories?urlCategory=${urlCategory}`;
  //const url = `${process.env.API_URL}/categories`;
  const response = await fetch(url);
  const category = await response.json();

  let urlListBurgers = `${process.env.API_URL}/burgers`;
  const responseListBurgers = await fetch(urlListBurgers);
  const burgersList = await responseListBurgers.json();

  let urlListHotDogs = `${process.env.API_URL}/hot-dogs`;
  const responseListHotDogs = await fetch(urlListHotDogs);
  const hotDogsList = await responseListHotDogs.json();

  let urlListDrinks = `${process.env.API_URL}/drinks`;
  const responseListDrinks = await fetch(urlListDrinks);
  const drinkList = await responseListDrinks.json();

  /**
   * *Como esta url: `${process.env.API_URL}/categories?urlCategory=${urlCategory}`; regresa 1 array de 1 solo item;
   * *es por eso que se le coloca el [0] para que tome como valor ese elemento y lo guarde en la propiedad category.
   */
  return {
    props: {
      category: category[0],
      burgersList,
      hotDogsList,
      drinkList,
    },
  };
}

export default Categoria;
