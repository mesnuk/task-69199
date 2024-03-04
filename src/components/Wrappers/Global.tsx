import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

interface GlobalProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Global = ({ children }: GlobalProps) => {

  return (
        <>
            <CssBaseline />
            {children}
        </>
  );
};

export default Global;
