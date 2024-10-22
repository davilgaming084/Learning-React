import React from "react";
import { createContext, useContext } from "react";
const Theme_Context = createContext({
    themeMode: "white",
    darkTheme: () => { },
    whiteTheme: () => { },
})

export default Theme_Context