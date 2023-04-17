import { configureStore } from "@reduxjs/toolkit";
import tamboReducer from "./tamboSlice";

export const store = configureStore({
  reducer: {
    tambo: tamboReducer,
  },
});
