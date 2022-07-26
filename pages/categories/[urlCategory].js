import { useRouter } from "next/router";

import React from "react";

import Card from "../../components/Card/Card";

import { sumaEstrellas } from "../../helper/starAverage";

import { getCategoryName, nameProduct } from "../../helper/urls";

const Categoria = ({
  arepasList,
  burgersList,
  category,
  chikenList,
  choriPapaList,
  drinkList,
  hotDogsList,
}) => {
  const router = useRouter();

  const allCategories = () => {
    const arepa       = arepasList?.map(getCategoryName);
    const burger      = burgersList?.map(getCategoryName);
    const chiken      = chikenList?.map(getCategoryName);
    const choriPapa   = choriPapaList?.map(getCategoryName)
    const drink       = drinkList?.map(getCategoryName);
    const hotDog      = hotDogsList?.map(getCategoryName);
    return {
      arepa:      nameProduct(arepa),
      burger:     nameProduct(burger),
      chiken:     nameProduct(chiken),
      choriPapa:  nameProduct(choriPapa),
      drink:      nameProduct(drink),
      hotDog:     nameProduct(hotDog),
    };
  };
  const respu = allCategories();

  const allDataChikens = chikenList?.map((chiken) => {
    let infoChiken = {
      description: chiken.description,
      photo: chiken.photo.url,
      id: chiken.id,
      name: chiken.chickenName,
      price: chiken.price,
      urlFood: chiken.urlFood,
      points: chiken.review_chikens?.map((stars) => {
        return stars.value;
      }),
      reviews: chiken.review_chikens?.map((reviews) => {
        return reviews.description;
      }),
    };
    let suma = infoChiken.points?.reduce(sumaEstrellas);
    let promedio = suma / infoChiken.points?.length;

    infoChiken.promedio = promedio;
    return infoChiken;
  });

  const allDataInfoChoriPapa = choriPapaList?.map((choriPapa) => {
    let infoChoriPapa = {
      description: choriPapa.description,
      photo: choriPapa.photo.url,
      id: choriPapa.id,
      name: choriPapa.potatoeName,
      price: choriPapa.price,
      urlFood: choriPapa.urlFood,
      points: choriPapa.review_potatoes?.map((stars) => {
        return stars.value;
      }),
      reviews: choriPapa.review_potatoes?.map((reviews) => {
        return reviews.description;
      }),
    };
    let suma = infoChoriPapa.points?.reduce(sumaEstrellas);
    let promedio = suma / infoChoriPapa.points?.length;

    infoChoriPapa.promedio = promedio;
    return infoChoriPapa;
  });

  const allDataArepas = arepasList?.map((arepa) => {
    let infoArepa = {
      description: arepa.description,
      photo: arepa.photo.url,
      id: arepa.id,
      name: arepa.arepaName,
      price: arepa.price,
      urlFood: arepa.urlFood,
      points: arepa?.review_arepas?.map((stars) => {
        return stars.value;
      }),
      reviews: arepa?.review_arepas.map((reviews) => {
        return reviews.description;
      }),
    };
   
    let suma = infoArepa.points.reduce(sumaEstrellas, 0);
    console.log('suma', suma);
    let promedio = suma / infoArepa?.points?.length;

    infoArepa.promedio = promedio;
    return infoArepa;
  });

  console.log('arepas', allDataArepas);

  const allDataBurger = burgersList?.map((burger) => {
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
    let suma = infoBurger?.points?.reduce(sumaEstrellas, 0);
    let promedio = suma / infoBurger.points.length;

    infoBurger.promedio = promedio;
    return infoBurger;
  });

  const allDataHotDogs = hotDogsList?.map((hotDog) => {
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
    let suma =
      infoHotDog.points.length > 0 && infoHotDog.points?.reduce(sumaEstrellas);
    let promedio = suma / infoHotDog.points?.length;

    infoHotDog.promedio = promedio;
    return infoHotDog;
  });

  const allDataDrinks = drinkList?.map((drink) => {
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
      infoDrink.points.length > 0 && infoDrink.points?.reduce(sumaEstrellas, 0);
    let promedio = suma / infoDrink.points?.length;

    infoDrink.promedio = promedio;
    return infoDrink;
  });



  const listado = () => {
    switch (category.categoryName) {  
      case respu.choriPapa:
        let allChoriPapas = allDataInfoChoriPapa.map((choriPapa) => (
          <Card
            average={choriPapa.promedio}
            key={choriPapa.id}
            nameProduct={choriPapa.name}
            photo={choriPapa.photo}
            price={choriPapa.price}
            urlProduct={choriPapa.urlFood}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allChoriPapas}
          </div>
        );

      case respu.chiken:
        let allChikens = allDataChikens.map((chiken) => (
          <Card
            average={chiken.promedio}
            key={chiken.id}
            nameProduct={chiken.name}
            photo={chiken.photo}
            price={chiken.price}
            urlProduct={chiken.urlFood}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allChikens}
          </div>
        );
    
      case respu.arepa:
        let allArepas = allDataArepas.map((arepa) => (
          <Card
            average={arepa.promedio}
            key={arepa.id}
            nameProduct={arepa.name}
            photo={arepa.photo}
            price={arepa.price}
            urlProduct={arepa.urlFood}
          />
        ));
        return (
          <div className="grid gap-4 mt-9 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {allArepas}
          </div>
        );

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
        let allDrinks = allDataDrinks.map((drink) => (
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

  console.log('listado--->', listado());

  return (
    <>
      <div className="w-full h-64 text-6xl text-white bg-gray-600 grid place-items-center">
        {router.query.urlCategory}
      </div>
      <div>{listado() === undefined ? <div className="flex justify-center text-2xl mt-48">No hay productos para esta categoría</div> : listado()}</div>
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

  let urlListArepas = `${process.env.API_URL}/arepas`;
  const responseListArepas = await fetch(urlListArepas);
  const arepasList = await responseListArepas.json();

  let urlListChikens = `${process.env.API_URL}/chickens`;
  const responseListChikens = await fetch(urlListChikens);
  const chikenList = await responseListChikens.json();

  let urlListChoriPapas = `${process.env.API_URL}/potatoes`;
  const responseListChoriPapas = await fetch(urlListChoriPapas);
  const choriPapaList = await responseListChoriPapas.json();

  /**
   * *Como esta url: `${process.env.API_URL}/categories?urlCategory=${urlCategory}`; regresa 1 array de 1 solo item;
   * *es por eso que se le coloca el [0] para que tome como valor ese elemento y lo guarde en la propiedad category.
   */
  return {
    props: {
      arepasList,
      burgersList,
      category: category[0],
      chikenList,
      choriPapaList,
      drinkList,
      hotDogsList,
    },
  };
}

export default Categoria;
