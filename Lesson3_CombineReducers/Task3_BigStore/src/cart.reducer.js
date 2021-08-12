import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = { cart: []};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        cart: state.cart.concat(action.payload.productId),
      };
    }

    case REMOVE_PRODUCT: {
        return {
          ...state,
          cart: state.cart.filter(prod=>prod.productId!==action.payload.productId),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;