import React, { useRef, useState } from 'react'

const Lower = ({ count, setCount }) => {
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
            <h1>Lower Seats</h1>
            <div id='Lower-Row-1'>
                <button onClick={getId} id='Lower-Section-Row-1-seat-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-1-seat-8'>8</button>
                <br />
            </div>
            <div id='Lower-Row-2'>
                <button onClick={getId} id='Lower-Section-Row-2-seat-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-2-seat-8'>8</button>
                <br />
            </div>
            <div id='Lower-Row-3'>
                <button onClick={getId} id='Lower-Section-Row-3-seat-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-3-seat-8'>8</button>
                <br />
            </div>
            <div id='Lower-Row-4'>
                <button onClick={getId} id='Lower-Section-Row-4-seat-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-4-seat-8'>8</button>
                <br />
            </div>
            <div id='Lower-Row-5'>
                <button onClick={getId} id='Lower-Section-Row-5-seat-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-5-seat-8'>8</button>
                <br />
            </div>
            <div id='Lower-Row-6'>
                <button onClick={getId} id='Lower-Section-Row-6-set-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-6-set-8'>8</button>
                <br />
            </div>
            <div id='Lower-Row-7'>
                <button onClick={getId} id='Lower-Section-Row-7-set-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-7-set-8'>8</button>

            </div>
            <div id='Lower-Row-8'>
                <button onClick={getId} id='Lower-Section-Row-8-set-1'>1</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-2'>2</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-3'>3</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-4'>4</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-5'>5</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-6'>6</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-7'>7</button>
                <button onClick={getId} id='Lower-Section-Row-8-set-8'>8</button>

            </div>

        </>
    )
}

export default Lower