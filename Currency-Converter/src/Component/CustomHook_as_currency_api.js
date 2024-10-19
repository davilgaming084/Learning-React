import { useEffect, useState } from "react";

// what is hook => 
function name(params) {
    return params
}
// that was hook

// making own hooks

function useCustomHook_as_currency_api(which_Curreny_you_want) {
    const [finalData, setfinalData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${which_Curreny_you_want}.json`)
            .then((response) => response.json())
            .then((data) => {
                setfinalData(data[which_Curreny_you_want])
            })
    }, [which_Curreny_you_want])
    return finalData

}
export default useCustomHook_as_currency_api;
