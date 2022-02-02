import React from "react";
// { createContext, useContext } from "react";
// import { useProductReducer } from './reducers'

import store from "./store";
import { Provider } from "react-redux";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

export default function StoreProvider(props) {
  // const [state, dispatch] = useProductReducer({
  //   products: [],
  //   cart: [],
  //   cartOpen: false,
  //   categories: [],
  //   currentCategory: "",
  // });

  return <Provider store={store} {...props} />;
}

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
