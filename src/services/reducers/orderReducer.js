import {
  SET_ORDER_DETAILS_SUCCESS,
  SET_ORDER_DETAILS,
  SET_ORDER_DETAILS_FAILED,
  OPEN_ORDER_DETAILS_MODAL,
} from "../actions/order";

const initialState = {
  // selectedIngredients: [],
  orderDetails: null,
  orderRequest: false,
  orderFailed: false,
  isOrderDetailsModalOpen: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_DETAILS: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case SET_ORDER_DETAILS_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case SET_ORDER_DETAILS_SUCCESS: {
      return {
        ...state,
        // selectedIngredients: [],
        orderRequest: false,
        orderDetails: action.payload,
      };
    }
    case OPEN_ORDER_DETAILS_MODAL: {
      return {
        ...state,
        isOrderDetailsModalOpen: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const changeOrderModalStatus = (status) => ({
  type: OPEN_ORDER_DETAILS_MODAL,
  payload: status,
});
