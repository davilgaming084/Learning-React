import { useEffect, useState } from 'react';

function App() {
  const [Password, setPassword] = useState("");
  const [range, setRange] = useState(8);
  const [Number, setNumber] = useState(false);
  const [Charactor, setCharactor] = useState(false);

  useEffect(() => {
    const generatePass = () => {
      let MainPassword = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const digit = "0123456789";
      const symbol = "~!@#$%^&*(){}?|/-";

      if (Number) {
        str += digit;
      }
      if (Charactor) {
        str += symbol;
      }
      for (let index = 0; index < range; index++) {
        const GetIndexValueOfStr = Math.floor(Math.random() * str.length);
        MainPassword += str.charAt(GetIndexValueOfStr);
      }
      setPassword(MainPassword);
    };

    generatePass();
  }, [range, Number, Charactor]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
          <input className="w-full p-2 border rounded mb-4 text-gray-700" value={Password} type="text" readOnly />
          <button className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-700" onClick={()=>{navigator.clipboard.writeText(Password)}}>Copy</button>
          <div className="mb-4">
            <label htmlFor="range" className="block mb-2">Length: {range}</label>
            <input 
              id="range" 
              value={range} 
              min={8} 
              max={100} 
              onChange={(e) => setRange(parseInt(e.target.value, 10))} 
              type="range" 
              className="w-full"
            />
          </div>
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="Number" 
              checked={Number} 
              onChange={() => setNumber(!Number)} 
              className="mr-2"
            /> 
            <label htmlFor="Number">Include Numbers</label>
          </div>
          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="Charactor" 
              checked={Charactor} 
              onChange={() => setCharactor(!Charactor)} 
              className="mr-2"
            /> 
            <label htmlFor="Charactor">Include Characters</label>
          </div>
          <p className="text-sm text-gray-600">Number: {Number ? "true" : "false"}</p>
          <p className="text-sm text-gray-600">Character: {Charactor ? "true" : "false"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
