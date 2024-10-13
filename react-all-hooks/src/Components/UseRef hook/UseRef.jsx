import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const myref = useRef(null)


    function focusInput() {
        myref.current.focus()
    }
    return (
        <>
            <div>UseRef</div><br />
            <p>USecase</p><br />
            <p>Use ref hook use for focus input of form | direct interact with dom  like get elemnt by id , querry selector | store mutable value </p>
            <p>useref store an obj which have property current </p>
            <br /><br />

            <input ref={myref} type="text" id='h' />
            <button onClick={focusInput}>Focus</button>
        </>
    )
}

export default UseRef