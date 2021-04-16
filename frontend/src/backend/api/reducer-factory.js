export const reducerFactory = (context) => {
  return (state = {}, action) => {
    const contextoFinal = action.context || context;

    switch (action.type) {
      case "SUCCESS":
        if (context === action.context) {
          if (action.payload) {
            state = { loading: false, dado: action.payload };
          }

          return state;
        }
        return state;

      case `${contextoFinal}_LIST_FAIL`:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
};
