
import { useRouter } from 'next/router';
import React from 'react';
import Card from '../../components/Card/Card';
import { getCategoryName, nameProduct } from "../../helper/urls";

const Categoria = ({ category, burgersList, hotDogsList, drinkList }) => {

  const router = useRouter()

  console.log(burgersList);
  console.log(hotDogsList);

  const allCategories = () => {
    const burger = burgersList.map(getCategoryName);
    const hotDog = hotDogsList.map(getCategoryName);
    const drink = drinkList.map(getCategoryName);

    console.log(burger);
    console.log(hotDog);

    return {
      burger: nameProduct(burger),
      hotDog: nameProduct(hotDog),
      drink: nameProduct(drink),
    };
  };

  const respu = allCategories();


  const listado = () => {
    switch (category.categoryName) {
      case respu.burger:
        let  allBurgers = burgersList.map((burger) => (
          <Card
            key={burger.id}
            urlProduct={burger.urlFood}
            nameProduct={burger.burgerName}
            photo={burger.photo.url}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allBurgers}
          </div>
        );

      case respu.hotDog:
        let allHotDogs = hotDogsList.map((hotDog) => (
          <Card
            key={hotDog.id}
            urlProduct={hotDog.urlFood}
            nameProduct={hotDog.hotDogName}
            photo={hotDog.photo.url}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allHotDogs}
          </div>
        );

      case respu.drink:
        let allDrinks = drinkList.map((drink) => (
          <div key={drink.id} className="mt-10">
            <Card
              urlProduct={drink.urlFood}
              nameProduct={drink.drinkName}
              photo={drink.photo.url}
            />
          </div>
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allDrinks}
          </div>
        );    
    }
  }
  
  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        {router.query.urlCategory}
      </div>
      <div>{listado()}</div>
    </>
  );
};

export async function getStaticPaths(){
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