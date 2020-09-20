import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./App/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "theme",
    JSON.stringify(store.getState().theme.darkTheme)
  );
});

export default store;
