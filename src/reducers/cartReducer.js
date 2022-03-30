import { ADD_TO_CART, QUANTITY_UP, QUANTITY_DOWN, DELETE_PRODUCT } from "../actions/cartActions.js";

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newCart = state.cart;
      if (newCart.includes(action.payload)) {
        newCart.map((item) => {
          if (item.id == action.payload.id) {
            item.quantity += 1;
          }
        });
        return newCart;
      }
      return {
        ...state,
        cart: [...newCart, action.payload],
      };
      break;
    }

    case QUANTITY_UP: {
      const newCart = [];
      state.cart.map((item) => {
        if (item.id == action.payload.key) {
          item.quantity += 1;
        }
        newCart.push(item);
      });
      return {
        ...state,
        cart: newCart,
      };
    }

    case QUANTITY_DOWN: {
      const newCart = [];
      let filter = [];
      state.cart.map((item) => {
        if (item.id == action.payload.key) {
          item.quantity -= 1;
        }
        newCart.push(item);
        filter = newCart.filter(item => item.quantity > 0)
      });
      return {
        ...state,
        cart: filter,
      };
    }
    case DELETE_PRODUCT: {
      const newCart = state.cart.filter((item) => item.id != action.payload.key);
      return {
        ...state,
        cart: newCart,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default CartReducer;
