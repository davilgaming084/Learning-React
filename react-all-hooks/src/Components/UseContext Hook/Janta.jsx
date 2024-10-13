import { useContext } from "react";
import Mycontext from "./Context/Mycontext";
const Janta = ({ yojna, name }) => {
    // console.log(`janta component ${JSON.stringify(yojna)} ${name}`);
    // console.log(  "janta component ", yojna);
    let data = useContext(Mycontext)
    console.log(data);
    return (
        <>
        <h1>Janta</h1>
        <p>{ data.yojna.money}</p>
        <p>{ data.yojna.pention}</p>
        <p>{ data.yojna.rashan  ? "true rashan milega":" no nhi milega"}</p>

        </>
    );
}; 

export default Janta;
