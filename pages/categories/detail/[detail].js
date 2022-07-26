import React, { useState } from "react";

// @Nextjs
import { useRouter } from "next/router";

// @Components
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import Reviews from "../../../components/Reviews/Reviews";

// @Helpers
import { getListOfFood, getUrlProduct } from "../../../helper/urls";
import { sumaEstrellas } from "../../../helper/starAverage";

const Detail = ({ burgersList, choriPapaList, hotDogsList, arepasList, drinksList, chickensList}) => {
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
    const burgerListNames     = burgersList?.map(getUrlProduct);
    const choriPapaListNames  = choriPapaList?.map(getUrlProduct);
    const hotDogsListNames    = hotDogsList?.map(getUrlProduct);
    const arepasListNames     = arepasList?.map(getUrlProduct);
    const drinksListNames     = drinksList?.map(getUrlProduct);
    const chickensListNames       = chickensList?.map(getUrlProduct);

    
    const nameBurger    = burgerListNames.find(nameProduct);
    const nameHotDog    = hotDogsListNames.find(nameProduct);
    const nameChoriPapa = choriPapaListNames.find(nameProduct);
    const nameArepa     = arepasListNames.find(nameProduct);
    const nameDrink     = drinksListNames.find(nameProduct);
    const nameChicken   = chickensListNames.find(nameProduct);

    return {
      nameBurger,
      nameChoriPapa,
      nameHotDog,
      nameArepa,
      nameDrink,
      nameChicken,
    };
  };
  const respu = productsNames();

  const allDataChoriPapas = choriPapaList.map((choriPapa) => {
    let infoChoriPapa = {
      category: choriPapa.category.urlCategory,
      description: choriPapa.description,
      photo: choriPapa.photo.url,
      id: choriPapa.id,
      name: choriPapa.potatoeName,
      price: choriPapa.price,
      urlFood: choriPapa.urlFood,

      points: choriPapa.review_potatoes.map((stars) => {
        return stars.value;
      }),

      reviews: choriPapa.review_potatoes.map((reviews) => {
        return {
          reviews: reviews.description,
          points: reviews.value,
          title: reviews.title,
          clientName: reviews.clientName,
        };
      }),
    };

    let suma = infoChoriPapa.points.reduce(sumaEstrellas, 0);
    let promedio = suma / infoChoriPapa.points.length;

    infoChoriPapa.promedio = promedio;
    return infoChoriPapa;
  });

  const allDataBurger = burgersList.map((burger) => {

    let infoBurger = {
      category: burger.category.urlCategory,
      description: burger.description,
      photo: burger.photo.url,
      id: burger.id,
      name: burger.burgerName,
      price: burger.price,
      urlFood: burger.urlFood,
      points: burger.review_burgers?.map((stars) => {
        return stars.value;
      }),
      reviews: burger.review_burgers?.map((reviews) => {
        return {
          reviews: reviews.description,
          points: reviews.value,
          title: reviews.title,
          clientName: reviews.clientName,
        };
      }),
    };

    let suma = infoBurger.points?.reduce(sumaEstrellas, 0);
    let promedio = suma / infoBurger.points?.length;

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

    let suma = infoHotDog.points?.reduce(sumaEstrellas, 0);
    let promedio = suma / infoHotDog.points?.length;
    infoHotDog.promedio = promedio;

    return infoHotDog;
  });

  const allDataArepas = arepasList.map((arepa) => {
    let infoArepa = {
      category: arepa.category.urlCategory,
      description: arepa.description,
      id: arepa.id,
      name: arepa.arepaName,
      photo: arepa.photo.url,
      price: arepa.price,
      urlFood: arepa.urlFood,

      points: arepa.review_arepas.map((stars) => {
        return stars.value
      }),

      reviews: arepa.review_arepas.map((reviews) => {
        return {
          reviews: reviews.description,
          points: reviews.value,
          title: reviews.title,
          clientName: reviews.clientName,
        }
      })
    }

    let suma = infoArepa.points.reduce(sumaEstrellas, 0);
    let promedio = suma / infoArepa.points.length;

    infoArepa.promedio = promedio;
    return infoArepa;
  });

  const allDataDrinks = drinksList.map((drink) => {
    let infoDrink = {
      category: drink.category.urlCategory,
      description: drink.description,
      id: drink.id,
      name: drink.drinkName,
      photo: drink.photo.url,
      price: drink.price,
      urlFood: drink.urlFood,   
      
      points: drink.review_drinks.map((stars) => {
        return stars.value
      }),

      reviews: drink.review_drinks.map((reviews) => {
        return {
          reviews: reviews.description,
          points: reviews.value,
          title: reviews.title,
          clientName: reviews.clientName,
        }
      })
    }
    let suma = infoDrink.points.reduce(sumaEstrellas, 0);
    let promedio = suma / infoDrink.points.length;

    infoDrink.promedio = promedio;
    return infoDrink;
  })

  const allDataChickens = chickensList.map((chicken) => {
    let infoChicken = {
      category: chicken.category.urlCategory,
      description: chicken.description,
      id: chicken.id,
      name: chicken.chickenName,
      photo: chicken.photo.url,
      price: chicken.price,
      urlFood: chicken.urlFood,   
      
      points: chicken.review_chikens.map((stars) => {
        return stars.value
      }),

      reviews: chicken.review_chikens.map((reviews) => {
        return {
          reviews: reviews.description,
          points: reviews.value,
          title: reviews.title,
          clientName: reviews.clientName,
        }
      })
    }
    let suma = infoChicken.points.reduce(sumaEstrellas, 0);
    let promedio = suma / infoChicken.points.length;

    infoChicken.promedio = promedio;
    return infoChicken;
  })







  switch (router.query.detail) {
    case respu.nameChoriPapa:
      return allDataChoriPapas.map(
        (choriPapa) =>
          respu.nameChoriPapa === choriPapa.urlFood && (
            <ProductDetail
              average={choriPapa.promedio}
              category={choriPapa.category}
              key={choriPapa.id}
              photo={choriPapa.photo}
              price={choriPapa.price}
              productDescription={choriPapa.description}
              productId={choriPapa.id}
              productName={choriPapa.name}
              reviews={choriPapa.reviews}
            />
          )
      );

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
              average={hotDog.promedio}
              category={hotDog.category}
              key={hotDog.id}
              photo={hotDog.photo}
              price={hotDog.price}
              productDescription={hotDog.description}
              productId={hotDog.id}
              productName={hotDog.name}
              reviews={hotDog.reviews}
            />
          )
      );

    case respu.nameArepa:
      return allDataArepas.map(
        (arepa) =>
          respu.nameArepa === arepa.urlFood && (
            <ProductDetail
              average={arepa.promedio}
              category={arepa.category}
              key={arepa.id}
              photo={arepa.photo}
              price={arepa.price}
              productDescription={arepa.description}
              productId={arepa.id}
              productName={arepa.name}
              reviews={arepa.reviews}
            />
          )
      );

    case respu.nameDrink:
      return allDataDrinks.map(
        (drink) =>
          respu.nameDrink === drink.urlFood && (
            <ProductDetail
              average={drink.promedio}
              category={drink.category}
              key={drink.id}
              photo={drink.photo}
              price={drink.price}
              productDescription={drink.description}
              productId={drink.id}
              productName={drink.name}
              reviews={drink.reviews}
            />
          )
      );

      case respu.nameChicken:
        return allDataChickens.map(
          (chicken) =>
            respu.nameChicken === chicken.urlFood && (
              <ProductDetail
                average={chicken.promedio}
                category={chicken.category}
                key={chicken.id}
                photo={chicken.photo}
                price={chicken.price}
                productDescription={chicken.description}
                productId={chicken.id}
                productName={chicken.name}
                reviews={chicken.reviews}
              />
            )
        );
  }

  return (
    <>
      <Reviews toggleModal={toggleModal} openModal={openModal} productId={3} />
    </>
  );
};




export async function getServerSideProps() {
  const [burgersList, hotDogsList, choriPapaList, arepasList, drinksList, chickensList] =
    await Promise.all([
      getListOfFood(`${process.env.API_URL}/burgers`),
      getListOfFood(`${process.env.API_URL}/hot-dogs`),
      getListOfFood(`${process.env.API_URL}/potatoes`),
      getListOfFood(`${process.env.API_URL}/arepas`),
      getListOfFood(`${process.env.API_URL}/drinks`),
      getListOfFood(`${process.env.API_URL}/chickens`),
    ]);

  return {
    props: {
      burgersList,
      choriPapaList,
      hotDogsList,
      arepasList,
      drinksList,
      chickensList,
    },
  };
}

export default Detail;
