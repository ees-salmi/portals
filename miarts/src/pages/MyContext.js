// MyContext.js
import React, { createContext, useState } from 'react';

// Create a context with a default value (in this case, an empty string)
let MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  let [sharedValue, setSharedValue] = useState([]);
  console.log(sharedValue);
  const updateValue = (newValue) => {
    setSharedValue(newValue);
  };

  return (
    <MyContext.Provider value={{ sharedValue, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
