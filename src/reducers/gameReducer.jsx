const gameState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = gameState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: [...action.payload.popular],
        upcoming: [...action.payload.upcoming],
        newGames: [...action.payload.newGames],
      };
    case "SEARCH":
      return {
        ...state,
        searched: [...action.payload.search],
      };
    default:
      return { ...state };
  }
};

export default gameReducer;
