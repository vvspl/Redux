export const LANG = 'setLanguage/language';

export const setLanguage = (language) => {
  return {
    type: LANG,
    payload:{
        language,
    },
  };
};
