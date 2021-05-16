export const base_url = "https://api.rawg.io/api/";

const currentYear = `${new Date().getFullYear()}-${
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1
}-${
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
}`;

const lastYear = `${new Date().getFullYear() - 1}-${
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1
}-${
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
}`;

const nextYear = `${new Date().getFullYear() + 1}-${
  new Date().getMonth() + 1 < 10
    ? `0${new Date().getMonth() + 1}`
    : new Date().getMonth() + 1
}-${
  new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate()
}`;

const popularGames = `games?key=${process.env.REACT_APP_GAMESDATABASE}&dates=${lastYear},${currentYear}&page_size=6&order=-rating`;
const upcome = `games?key=${process.env.REACT_APP_GAMESDATABASE}&dates=${currentYear},${nextYear}&page_size=6&order=-rating`;
const newG = `games?key=${process.env.REACT_APP_GAMESDATABASE}&dates=${currentYear}&page_size=6&order=-rating`;

export const popular = `${base_url}${popularGames}`;
export const upComing = `${base_url}${upcome}`;
export const newGames = `${base_url}${newG}`;
export const searchAPI = (searchQuery) => {
  return `${base_url}games?key=${process.env.REACT_APP_GAMESDATABASE}&search=${searchQuery}&order=-rating&page_size=6`;
};
