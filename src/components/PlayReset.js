import React, { Fragment } from "react";
import { useState, useRef, useEffect } from "react";

const Play = (props ) => {
    
   

    function HandlePlay () {
        if(props.Play === false){
            props.Setplay(true); 
            props.Setstart("fas fa-pause text-outline-success") ;
            const mins = (props.Minutes).toString();
            const secs = (props.Seconds).toString();
            localStorage.setItem("minu",mins);
            localStorage.setItem("secu",secs);
            
        }
        else
        {
            props.Setplay(false);
            props.Setstart("fas fa-play text-outline-success");
        }
        
    }

    function HandleReset (){
        
        props.Setplay(false);
        setTimeout(() => {
            const intmins = localStorage.getItem("minu");
            console.log(intmins);
           const intsecu = localStorage.getItem("secu");
        
            props.Setminutes(parseInt(intmins));
            props.Setseconds(parseInt(intsecu));
        }, 1000);
        
        
    }
    
    if(props.Play === true)
    {
        useEffect(()=>{
            let myInterval = setTimeout(() => {
                
                    if (props.Seconds > 0  ) {
                        props.Setseconds(props.Seconds - 1);
                    }
                    else if (props.Seconds === 0 ) {
                        if (props.Minutes === 0)  {
                            clearTimeout(myInterval);
                            props.Setplay(false);
                            
                        } else {
                            props.Setminutes(props.Minutes - 1);
                            props.Setseconds(59);
                        }
                    } 
                }, 1000)
                
                return ()=> {
                    clearTimeout(myInterval);
                  };
        
                }) 
      
    }

    
    
    return ( 
        <Fragment>
        <button type="button" className="btn btn-outline-success btn-sm  w-25 p-2 mb-1 d-flex justify-content-center align-items-center" onClick = { HandlePlay } ><i  className={props.Start}></i></button>
        <button type="button" className="btn btn-outline-success btn-sm  w-25 mb-1 d-flex justify-content-center align-items-center p-2" onClick = { HandleReset } ><i className="fas fa-retweet"></i></button>
        </Fragment>
    );
}
 
export default Play;