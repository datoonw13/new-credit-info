const globalData = {
  lang: 'ka',
};

export default globalData;

export const setLang = (lang: string) => {
  globalData.lang = lang;
};
