import { useState ,useCallback } from 'react';
import reactLogo from '../../assets/react.svg';
// import reactLogo from '../../../path/to/asset';

import Child from './Child';

function USeCallback() {
    const [count, setCount] = useState(0);
    const [setadjective, setsetadjective] = useState("god");


    let changeAdjective = useCallback(() => {

        return "gu" + count

    }, [])


    return (
        <>
            <Child adjective={"good"} changeAdjective={changeAdjective} />
            <button onClick={() => { setCount(count + 1) }}>click</button>
            <p>{count}</p>
        </>
    );
}

export default USeCallback;
