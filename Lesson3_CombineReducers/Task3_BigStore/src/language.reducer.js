import { LANG } from './language.actions';

const initialState = 'en';

const setLangReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG: {
      return  action.payload.language;
          }

    default:
      return state;
  }
};

export default setLangReducer;