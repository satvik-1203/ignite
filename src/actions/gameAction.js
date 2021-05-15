import axios from "axios";
import { popular, upComing, newGames, searchAPI } from "../api";

export const FetchGames = () => async (dispatch) => {
  const popularGames = await axios.get(popular);
  const futureGames = await axios.get(upComing);
  const newG = await axios.get(newGames);
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: [...popularGames.data.results],
      upcoming: [...futureGames.data.results],
      newGames: [...newG.data.results],
    },
  });
};

export const searchGame = (searchQuery) => async (dispatch) => {
  const searchGames = await axios.get(searchAPI(searchQuery));
  dispatch({
    type: "SEARCH",
    payload: { search: [...searchGames.data.results] },
  });
};
