import React from 'react'

const Middle = ({ count, setCount }) => {
    let getId = (e) => {
        const id = e.target.id;
        if (count.length < 5) {
            if (!count.includes(id)) { // Check for duplicates
                setCount([...count, id]);
                e.target.style.backgroundColor = "red";
                console.log(count);
            } else {
                console.log("This seat is already selected.");
            }
        } else {
            console.log("You have reached the maximum seats booked.");
            alert(count);
        }

    }
    return (
        <>
            <h1>Middle Seats</h1>
            <div id='Middle-Row-1'>
                <button onClick={getId} id='Middle-Section-Row-1-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-1-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-1-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-1-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-1-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-1-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-1-set-7'>7</button>
                <br />
            </div>
            <div id='Middle-Row-2'>
                <button onClick={getId} id='Middle-Section-Row-2-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-2-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-2-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-2-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-2-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-2-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-2-set-7'>7</button>
                <br />
            </div>
            <div id='Middle-Row-3'>
                <button onClick={getId} id='Middle-Section-Row-3-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-3-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-3-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-3-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-3-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-3-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-3-set-7'>7</button>
                <br />
            </div>
            <div id='Middle-Row-4'>
                <button onClick={getId} id='Middle-Section-Row-4-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-4-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-4-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-4-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-4-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-4-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-4-set-7'>7</button>
                <br />
            </div>
            <div id='Middle-Row-5'>
                <button onClick={getId} id='Middle-Section-Row-5-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-5-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-5-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-5-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-5-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-5-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-5-set-7'>7</button>
                <br />
            </div>
            <div id='Middle-Row-6'>
                <button onClick={getId} id='Middle-Section-Row-6-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-6-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-6-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-6-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-6-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-6-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-6-set-7'>7</button>
                <br />
            </div>
            <div id='Middle-Row-7'>
                <button onClick={getId} id='Middle-Section-Row-7-set-1'>1</button>
                <button onClick={getId} id='Middle-Section-Row-7-set-2'>2</button>
                <button onClick={getId} id='Middle-Section-Row-7-set-3'>3</button>
                <button onClick={getId} id='Middle-Section-Row-7-set-4'>4</button>
                <button onClick={getId} id='Middle-Section-Row-7-set-5'>5</button>
                <button onClick={getId} id='Middle-Section-Row-7-set-6'>6</button>
                <button onClick={getId} id='Middle-Section-Row-7-set-7'>7</button>
                <br />
            </div>
           

        </>
    )
}

export default Middle