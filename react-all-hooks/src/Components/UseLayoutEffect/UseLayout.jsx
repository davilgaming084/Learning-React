import React, { useLayoutEffect, useRef } from 'react'

const UseLayout = () => {
    const myref = useRef(null)
    useLayoutEffect(() => {
    console.log(myref.current.getBoundingClientRect());  // geting input elemnt of reading thats only work of thhis hook
    // document.querySelector("p").style.backgroundColor = "red"
    }, [])
    return (
        <>
            <h1>UseLayout</h1><br />
            <p>UseLayout :-- Same as UseEffect | use for api calling| dom  - interaction  :- element only reading work  || side effect work ||  </p><br />
            <p> difrence</p>
            <p> it is run first against useEffact this is the only diffrence || and get value of element  viweScreen,height,top etc</p>
            <input style={{height:"20px"}} type="text" ref={myref} />
        </>


    )
}

export default UseLayout