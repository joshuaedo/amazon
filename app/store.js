import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../slices/basketSlice";
import throttle from "lodash.throttle";
import { saveState, loadState } from "../lib/localStorage";

// By providing a preloaded state (loaded from local storage), we can persist
// the state across the user's visits to the web app.
//
// READ: https://redux.js.org/recipes/configuring-your-store
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  preloadedState: loadState(),
});

// We'll subscribe to state changes, saving the store's state to the browser's
// local storage. We'll throttle this to prevent excessive work.
store.subscribe(throttle(() => saveState(store.getState()), 1000));
