
import { BASE_URL } from "../vars/vars";

export const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getEngredientsList = async () => {
  const res = await fetch(`${BASE_URL}/ingredients`);
  return checkResponse(res);
};

export const handleOrderDetails = (ingredientIDs) => {
  const url = `${BASE_URL}/orders`;
  console.log({ ingredients: ingredientIDs });
  const res = fetch(url, {
    method: "POST",
    body: JSON.stringify({ ingredients: ingredientIDs }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res;
};