import React from 'react'

const Vip = ({ count, setCount }) => {
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
    return (<>

        <h1>Vip Seats</h1>
        <div id='Vip-Row-1'>
            <button onClick={getId} id='Vip-Sction-Row-1-set-1'>1</button>
            <button onClick={getId} id='Vip-Sction-Row-1-set-2'>2</button>
            <button onClick={getId} id='Vip-Sction-Row-1-set-3'>3</button>
            <button onClick={getId} id='Vip-Sction-Row-1-set-4'>4</button>
            <button onClick={getId} id='Vip-Sction-Row-1-set-5'>5</button>
            <button onClick={getId} id='Vip-Sction-Row-1-set-6'>6</button>
            <br />
        </div>

        <div id='Vip-Row-2'>
            <button onClick={getId} id='Vip-Sction-Row-2-set-1'>1</button>
            <button onClick={getId} id='Vip-Sction-Row-2-set-2'>2</button>
            <button onClick={getId} id='Vip-Sction-Row-2-set-3'>3</button>
            <button onClick={getId} id='Vip-Sction-Row-2-set-4'>4</button>
            <button onClick={getId} id='Vip-Sction-Row-2-set-5'>5</button>
            <button onClick={getId} id='Vip-Sction-Row-2-set-6'>6</button>
            <br />
        </div>

        <div id='Vip-Row-3'>
            <button onClick={getId} id='Vip-Sction-Row-3-set-1'>1</button>
            <button onClick={getId} id='Vip-Sction-Row-3-set-2'>2</button>
            <button onClick={getId} id='Vip-Sction-Row-3-set-3'>3</button>
            <button onClick={getId} id='Vip-Sction-Row-3-set-4'>4</button>
            <button onClick={getId} id='Vip-Sction-Row-3-set-5'>5</button>
            <button onClick={getId} id='Vip-Sction-Row-3-set-6'>6</button>
            <br />
        </div>

        <div id='Vip-Row-4'>
            <button onClick={getId} id='Vip-Sction-Row-4-set-1'>1</button>
            <button onClick={getId} id='Vip-Sction-Row-4-set-2'>2</button>
            <button onClick={getId} id='Vip-Sction-Row-4-set-3'>3</button>
            <button onClick={getId} id='Vip-Sction-Row-4-set-4'>4</button>
            <button onClick={getId} id='Vip-Sction-Row-4-set-5'>5</button>
            <button onClick={getId} id='Vip-Sction-Row-4-set-6'>6</button>
            <br />
        </div>

        <div id='Vip-Row-5'>
            <button onClick={getId} id='Vip-Sction-Row-5-set-1'>1</button>
            <button onClick={getId} id='Vip-Sction-Row-5-set-2'>2</button>
            <button onClick={getId} id='Vip-Sction-Row-5-set-3'>3</button>
            <button onClick={getId} id='Vip-Sction-Row-5-set-4'>4</button>
            <button onClick={getId} id='Vip-Sction-Row-5-set-5'>5</button>
            <button onClick={getId} id='Vip-Sction-Row-5-set-6'>6</button>
            <br />
        </div>


        <div id='Vip-Row-6'>
            <button onClick={getId} id='Vip-Sction-Row-6-set-1'>1</button>
            <button onClick={getId} id='Vip-Sction-Row-6-set-2'>2</button>
            <button onClick={getId} id='Vip-Sction-Row-6-set-3'>3</button>
            <button onClick={getId} id='Vip-Sction-Row-6-set-4'>4</button>
            <button onClick={getId} id='Vip-Sction-Row-6-set-5'>5</button>
            <button onClick={getId} id='Vip-Sction-Row-6-set-6'>6</button>
            <br />
        </div>





    </>
    )
}

export default Vip