export const SET_CURRENT_INGREDIENTS = "SET_CURRENT_INGREDIENTS";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SWAP_FILLINGS = "SWAP_FILLINGS";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";
export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE";

export const deleteIngredient = (ingredient) => ({
    type: DELETE_INGREDIENT,
    data: ingredient,
  });
  
  export const swapFillings = (dragIndex, hoverIndex, ingredient) => ({
    type: SWAP_FILLINGS,
    data: { dragIndex, hoverIndex, ingredient },
  });
  
  export const clearConstructor = () => ({
    type: CLEAR_CONSTRUCTOR,
  });
  
  export const setTotalPrice = (totalPrice) => ({
    type: SET_TOTAL_PRICE,
    data: totalPrice,
});