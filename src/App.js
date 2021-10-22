import React from "react";
import Chrono from "./components/Chrono";
import Plus_Minus from "./components/Plus_Minus";
import Play from "./components/PlayReset";
import Modal from "./components/Modal";

import { useEffect, useState } from 'react';





const App  = () => {
 
  const [minutes, setMinutes ] = useState(0);
  const [seconds, setSeconds ] =  useState(2);
  const [start,setStart] = useState("fas fa-play text-outline-success");
  const [play, setPlay] = useState(false);
  // const [plusminus, setPlus] = useState(false);


  // function addMins(times) {  //add new todo to our array
  //   setTime([times, ...time])//"...todos" old todo array list
  //   //1st param : new array 2nd param : old todo array spreads over it
  // }

    return (  
    <div className="App">
      
      <div className="content">
        <div className="container centered w-50">
            <div className="row">
         <Chrono  Minutes={minutes} Seconds={seconds} />
         <div className="col-4 d-flex flex-column">
          <Plus_Minus  Minutes={minutes} Setminutes={setMinutes} Setseconds={setSeconds} Seconds={seconds} Play={play} Setplay={setPlay} />
          <Play Start={start} Setstart={setStart} Minutes={minutes} Setminutes={setMinutes} Setseconds={setSeconds} Seconds={seconds}  Play={play} Setplay={setPlay} />
          
          </div>
         </div>
         
      </div>
      <div>
           <Modal  Minutes={minutes} Setminutes={setMinutes} Setseconds={setSeconds} Seconds={seconds} Play={play} Setplay={setPlay} />
         </div>
      </div>
    </div>
    );
}
 
export default App ;