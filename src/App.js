import React from "react";
import Chrono from "./components/Chrono";
import Plus_Minus from "./components/Plus_Minus";
import Play from "./components/Play";
import Reset from "./components/Reset";
import { useEffect, useState } from 'react';





const App  = () => {
 
  const [minutes, setMinutes ] = useState(0);
  const [seconds, setSeconds ] =  useState(2);
  const [check, setCheck] = useState(false);


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
          <Plus_Minus  Minutes={minutes} Setminutes={setMinutes} Setseconds={setSeconds} Seconds={seconds} />
          <Play Minutes={minutes} Setminutes={setMinutes} Setseconds={setSeconds} Seconds={seconds}  Check={check} Setcheck={setCheck} />
          <Reset />
          </div>
         </div>
         </div>
      </div>
    </div>
    );
}
 
export default App ;