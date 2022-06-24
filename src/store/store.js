import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./reducers/pokemonReducer";
export default configureStore({
  reducer: pokemonReducer,
  //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //@eslint-disable-line
});
