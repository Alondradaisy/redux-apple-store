import { Store } from "@mui/icons-material";
import { createStore } from "redux";

//ACTIONS
const ADD_TO_BAG_ACTION = "reduxapplestore.com/ADD_TO_BAG";

//ACTION CREATOR
export const addToBagActionCreator = (addToBag) => {
  return {
    type: ADD_TO_BAG_ACTION,
    payload: { addToBag },
  };
};

const bagReducer = (state, action) => {
  if (action.type === ADD_TO_BAG_ACTION) {
    const { payload } = action;

    return;
  }
  return state;
};

const initialState = { shoppingBag: [] };

const store = createStore(
  bagReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
