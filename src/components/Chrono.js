import React from "react";
import { useState, useEffect } from "react";

const Chrono  = (props) => {
    
    
    return (  
        
        <div className="col-8">
         
        
        
            <h1 className="chrono-display text-success text-center">
                {props.Minutes}:{props.Seconds < 10 ?  `0${props.Seconds}` : props.Seconds} </h1>
        
        
        </div>
    );
}
 
export default Chrono ;