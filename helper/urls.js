export const server = "http://localhost:1337";
export const getCarrusel = `${server}/api/carrusels?populate=Photo`;


export const getCarruselImage = async () => {
  let response = await fetch(getCarrusel);
  let result = await response.json();

  return {
    props: {
      result,
    },
  };
};

export const getListOfFood = async (url) => {
  const responseListOfFood = await fetch(url);
  const foodList = await responseListOfFood.json();
  return foodList;
};

export const getUrlProduct = (product) => {
  return product.urlFood;
};

export const getCategoryName = (product) => {
  return product.category?.categoryName;
};

export const nameProduct = (array) => {
  const valor = new Set(array);
  let resul = "";
  for (const y of valor.values()) {
    return (resul = y);
  }
};
