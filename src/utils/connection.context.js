import React from "react";
export default React.createContext({
  authentication: false,
  setAuth: (bool) => {},
});
