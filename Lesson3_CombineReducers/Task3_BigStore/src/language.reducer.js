import { LANG } from './language.actions';

const initialState = null;

const setLangReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG: {
      return {
        state: action.payload.language,
      };
    }

    default:
      return state;
  }
};

export default setLangReducer;