import { createStore } from "redux";

const initialState = {
  counter: 0,
};
const counterReducer = (initialState, action) => {};

const store = createStore(counterReducer);

export default store;
