import Usestate from "../../UseState Hook/Usestate";
import Mycontext from "./Mycontext";
import React from 'react';
import { useState } from "react";

const Money = (props) => {
    const yojna = {
        money: 1000,
        rashan: true,
        pention: 500
    };
    const [first, setfirst] = useState(0)
    return (
        <Mycontext.Provider value={{ yojna , first,setfirst }}> 
            {props.children}
        </Mycontext.Provider>
    );
}

export default Money;
