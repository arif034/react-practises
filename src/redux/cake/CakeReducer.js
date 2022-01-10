import { BUY_CAKE } from "./CakeType.js";

const initialState = {
  noOfCakes: 10
};

export const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return { noOfCakes: state.noOfCakes - 1 };
    }
    default: {
      return state;
    }
  }
};
