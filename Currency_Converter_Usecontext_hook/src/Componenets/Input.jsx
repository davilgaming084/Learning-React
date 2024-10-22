import { useState, useContext } from "react";
import React from "react";
import InputContext from "../Contexts/InputContext";
function Input({ lable, FromInputValue, setFromInputValue, ValueOfFrom, setValueOfFrom, readOnly }) {
    const { OPtions } = useContext(InputContext)
    return (
        <>
            <div className={`bg-white bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-10 backdrop-blur-lg border border-white/20 dark:border-gray-600 rounded-lg p-3 text-sm flex`}>
                <div className="w-1/2">
                    <label className="text-black dark:text-white/70 mb-2 inline-block">
                        {lable}
                    </label>
                    <input
                        className="outline-none w-full bg-transparent py-1.5 text-black dark:text-white"
                        type="number"
                        placeholder="Amount"
                        readOnly={readOnly}
                        value={FromInputValue}
                        onChange={(e) => { setFromInputValue(Number(e.target.value)) }}
                    />
                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <p className="text-black dark:text-white/70 mb-2 w-full">Currency Type</p>
                    <select value={ValueOfFrom} onChange={(e) => setValueOfFrom(e.target.value)}
                        className="rounded-lg px-1 py-1 bg-gray-100 dark:bg-gray-700 text-black dark:text-white cursor-pointer outline-none"
                    >
                        {OPtions.map((Currency_Options) => {
                            return <option key={Currency_Options} value={Currency_Options}>{Currency_Options}</option>


                        })}

                    </select>
                </div>
            </div>

        </>
    );
}

export default Input;
