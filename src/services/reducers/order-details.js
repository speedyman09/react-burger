import {
    GET_ORDERNUMBER_REQUEST,
    GET_ORDERNUMBER_SUCCESS,
    GET_ORDERNUMBER_FAILED,
    SET_ORDER_DETAILS,
    CLEAR_ORDER_DETAILS,
  } from "../actions/order-details";
  import icon from "../../images/done.png"
  
  const initialState = {
    orderDetails: {
      orderId: 0,
      statusIcon: "",
      status: {},
    },
    isOpened: false,
    orderNumberRequest: false,
    orderNumberFailed: false,
  };
  
  export const orderDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ORDERNUMBER_REQUEST: {
        return {
          ...state,
          orderNumberRequest: true,
          orderNumberFailed: false,
        };
      }
      case GET_ORDERNUMBER_SUCCESS: {
        return {
          ...state,
          orderDetails: { ...state.orderDetails, orderId: action.orderNumber },
          orderNumberRequest: false,
        };
      }
      case GET_ORDERNUMBER_FAILED: {
        return {
          ...state,
          orderNumberFailed: true,
          orderNumberRequest: false,
        };
      }
      case SET_ORDER_DETAILS: {
        return {
          ...state,
          orderDetails: {
            ...state.orderDetails,
            statusIcon: icon,
            status: {
              p1: "Ваш заказ начали готовить",
              p2: "Дождитесь готовности на орбитальной станции",
            },
          },
          isOpened: true,
        };
      }
      case CLEAR_ORDER_DETAILS: {
        return {
          ...state,
          orderDetails: {},
          isOpened: false,
        };
      }
      default: {
        return state;
      }
    }
  };