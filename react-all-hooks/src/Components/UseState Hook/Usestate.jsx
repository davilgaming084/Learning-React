import React from 'react'
import { useState, } from 'react'
const Usestate = () => {
    const [counter, setcounter] = useState(0)
    function Increse() {
        setcounter(counter+1)
        console.log(counter );
    }
    function decrese() {
        setcounter(counter-1)
        console.log(counter);
    }
    return (
        <>
            <div>Usestate</div>
            <p> usestate UseCase :-     
                <br />in react variabe are immutability, means you can not update directly , thats why we use usestate-hook for update varible  </p>

            <p>{counter}</p>
            <button onClick={Increse}>ince</button>
            <button onClick={decrese}>decr</button>
        </>
    )
}

export default Usestate