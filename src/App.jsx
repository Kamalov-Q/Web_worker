/* eslint-disable no-unused-vars */
import { useState } from "react"

function App() {
  const [data, setData] = useState(0);
  const worker = new Worker(new URL("./Worker.js", import.meta.url)) //Calling the worker
  const bgFunc = () => {
    if(document.body.style.background !== "green") {
      document.body.style.background = "green"
    }else {
      document.body.style.background = "blue"
    }
  }

  const calculateSum = () => {
   /*  let sum = 0
    for(let i = 0; i < 10000000000; i++) {
      sum+=i;
    } */ //Old Task
    worker.postMessage("salom worker")
    // alert(`The final sum is ${sum}`)
  }

  worker.onmessage = function (message) {
    alert(message?.data);//Where sum is taken
    setData(message?.data);
  }

  return (
    <>
     <div>
      <button id="bgButton" onClick={bgFunc}>Change background</button>
      <button id="sumButton" onClick={calculateSum}>Calculate the sum</button>
      <h1>The Final Sum is {data}</h1> {/* Displaying sum in UI */}
     </div>
    </>
  )
}

export default App
