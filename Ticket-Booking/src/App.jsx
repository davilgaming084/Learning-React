import { useState } from 'react';
import Vip from './assets/Component/Vip';
import Middle from './assets/Component/Middle'; // Corrected path
import Lower from './assets/Component/Lower';  // Corrected path
import Btn from './Componenet/Btn';

function App() {
  const [count, setCount] = useState([]);
 
  

  return (
    <>
      <div id='p'>

        <p>{count[0]} </p>
        <p>{count[1]} </p>
        <p>{count[2]} </p>
        <p>{count[3]} </p>
        <p>{count[4]} </p>
      </div>


      <Vip count={count} setCount={setCount} />     {/* Render Vip first */}
      <Middle count={count} setCount={setCount} />  {/* Render Middle next */}
      <Lower count={count} setCount={setCount} />




      <Btn data={setfirst}/>
    </>


  );
}

export default App;
