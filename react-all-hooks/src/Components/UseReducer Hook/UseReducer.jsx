import React from 'react';
import { useReducer } from 'react';

const UseReducer = () => {
    let countReducer = (state, action) => {
        if (action.type === "increment") { // Use triple equals for strict comparison
            return { count: state.count + 1 }; // Return a new state object with updated count
        }
        // Add a default return statement to handle unknown action types
        return state;
    };

    // useReducer initializes state with an object having a 'count' property.
    // 'countReducer' is the reducer function that takes 'state' and 'action' as parameters.
    // 'dispatch' is a function to send actions to the reducer.
    const [state, dispatch] = useReducer(countReducer, { count: 10 });

    return (
        <>
            <div>UseReducer</div>
            <br />
            <p>UseCAse :--    useReducer as a way to manage state for more complex logic in React. It's like a supercharged version of useState for handling state transitions based on actions.</p>
            <br />
            <p>In simpler terms: <br />

                useState is great for simple states. <br />

                useReducer is for when you have a more complex state logic with multiple possible updates.</p>

            <p>{state.count}</p>
            <button onClick={() => { dispatch({ type: "increment" }) }}>Increment</button>
            {/* <button onClick={() => { dispatch({ type: "decrement" }) }}>Decrement</button> */}
        </>
    );
};

export default UseReducer;
