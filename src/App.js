import React from "react";
import Chrono from "./components/Chrono";
import Plus_Minus from "./components/Plus_Minus";
import Play from "./components/Play";
import Reset from "./components/Reset";

const MinSecs = {minutes: 1, seconds: 0}

const App  = () => {
    return (  
    <div className="App">
      
      <div className="content">
        <div className="container centered w-50">
            <div className="row">
         <Chrono MinSecs={MinSecs} />
         <div className="col-4 d-flex flex-column">
          <Plus_Minus />
          <Play />
          <Reset />
          </div>
         </div>
         </div>
      </div>
    </div>
    );
}
 
export default App ;