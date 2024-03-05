import React from "react";

import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import store from "../../store/store.ts";

interface GlobalProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Global = ({ children }: GlobalProps) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>
  );
};

export default Global;
