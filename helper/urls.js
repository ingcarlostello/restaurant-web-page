//export const server = "http://localhost:1337";
//export const server = "http://localhost:8000";
export const server = `${process.env.NEXT_PUBLIC_API_URL}`
export const getCarrusel = `${server}/carousel`;
export const logoUrl = `${server}/logo`;
export const socialMedia = `${server}/contact`;


export const getCarruselImage = async () => {
  let response = await fetch(getCarrusel);
  let result = await response.json();
  return result
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

export const getLogoImage = async () => {
  
  let response = await fetch(logoUrl);

  
  let result = await response.json();

  return result
}

export const getSocialMedia = async () => {
  let response = await fetch(socialMedia);
  let result = await response.json();
  return result
}
 