import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [data, setData] = useState([]);
  const store = {
    details: [data, setData],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default Store;
