const search = (state = "", action) => {
  switch (action.type) {
    case "onChange":
      return action.payload.data;
    default:
      return state;
  }
};

export default search;
