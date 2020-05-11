import React, {useState} from 'react'
import './App.css'

function App(){
  const [count, setCount] = useState(0);
  return(
    <div className="App">
        <h1>Counter app Using State</h1>
        <h2>Counter Value : {count}</h2>

        <button className="button" onClick={() => count > 9 ? "" : setCount(count+1)} >Increase Counter</button>
        {/* <button className="button" onClick={() => setCount(count+1)} >Increase</button> */}

        <button className="button" onClick={() => count<1 ? "" : setCount(count-1)}>Decrease Counter</button>
        {/* <button className="button" onClick={() => setCount(count-1)}>Decrease</button> */}


        <button className="button" onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  )
};

export default App;
