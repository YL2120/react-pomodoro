import React from "react";
import { useState, useEffect } from "react";

const Play = (props ) => {
    
    
    function HandleCheck () {
        if(props.Check === false)
           props.Setcheck(true);
        else
           props.Setcheck(false);
    }
    
    if(props.Check === true)
    {
        useEffect(()=>{
            setTimeout(() => {
                    if (props.Seconds > 0 ) {
                        props.Setseconds(props.Seconds - 1);
                    }
                    else if (props.Seconds === 0) {
                        if (props.Minutes === 0) {
                            // clearInterval(myInterval)
                            props.Setminutes(0);
                            props.Setseconds(0);
                        } else {
                            props.Setminutes(props.Minutes - 1);
                            props.Setseconds(59);
                        }
                    } 
                }, 1000)
                // return ()=> {
                //     clearInterval(myInterval);
                //   };
        
                }) 
      
    }

    
    
    return ( 
        <button type="button" className="btn btn-outline-success btn-sm  w-25 p-2 mb-1 d-flex justify-content-center align-items-center" onClick = { HandleCheck } ><i class="fas fa-play text-outline-success"></i></button>
    );
}
 
export default Play;