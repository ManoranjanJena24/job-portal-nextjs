"use client";
import { Provider } from "react-redux";
import store from "./store";
// import { store } from "./store"; // Adjust path to your store
// import store drom "./store"

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
