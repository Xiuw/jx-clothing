import {
  CART_TOGGLE,
  ADD_ITEM_TO_CART,
  DELETE_CART_ITEM,
  REMOVE_A_ITEM
} from "./cartConstant";

import { addingItem, deletingItem, removingItem } from "./cartFunction";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addingItem(state.cartItems, action.payload)
      };
    case REMOVE_A_ITEM:
      return {
        ...state,
        cartItems: removingItem(state.cartItems, action.payload)
      };
    case DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: deletingItem(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
export default cartReducer;
