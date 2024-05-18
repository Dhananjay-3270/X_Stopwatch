import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isclicked, setIsclicked] = useState(false);
  const [timecount, setTimecount] = useState(0);
  useEffect(() => {
    let intervalid;
    if (isclicked) {
      intervalid = setInterval(() => {
        setTimecount((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalid);
    };
  }, [isclicked]);
  const handleChange = () => {
    setIsclicked(!isclicked);
  };
  const handlereset = () => {
    setIsclicked(false);
    setTimecount(0);
  };

  const format = (timecount)=>{
let min =Math.floor(timecount/60) ;
let sec = timecount%60 ;
return `${min}:${sec<10?"0":""}${sec} `

  }
  return (
    <>
      <h1>StopWatch</h1>
      <h4>Time: {format(timecount)}</h4>
      <button onClick={handleChange}>{isclicked ? "Stop" : "Start"}</button>
      <button onClick={handlereset}>Reset</button>
    </>
  );
}

export default App;
