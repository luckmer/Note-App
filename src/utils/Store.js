import React, { createContext } from "react";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const store = {};

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
