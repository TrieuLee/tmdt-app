const ForgetReducer = (state, action) => {
  switch (action.type) {
    case "FORGET_START":
      return {
        user: null,
        isFetching: true,
        error: null,
      };
    case "FORGET_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: null,
      };
    case "FORGET_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ForgetReducer;
