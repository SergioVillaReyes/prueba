import { createStore } from "redux";
import reducer from "./reducers";
import {
  getStateLocalStoraga,
  setStateLocalStorage
} from "./utils/localStorage";



const localStorageState = getStateLocalStoraga();

const store = createStore(
  reducer,
  localStorageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  setStateLocalStorage({
    favoritos: store.getState().favoritos
  });
});

console.log('storeasas',store)

export default store;