const onChange = (change) => async (dispatch) => {
  dispatch({
    type: "onChange",
    payload: {
      data: change,
    },
  });
};

export default onChange;
