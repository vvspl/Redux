import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

const initialState = { products: []};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.productId),
      };
    }

    case REMOVE_PRODUCT: {
        return {
          ...state,
          products: state.products.filter(prod=>prod.id!==action.payload.productId),
        };
      }

    default:
      return state;
  }
};

export default cartReducer;