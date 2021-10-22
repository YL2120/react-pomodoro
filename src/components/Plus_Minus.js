import React, { Fragment } from "react";
import { useState, useEffect } from "react";

const Plus_Minus = (props) => {

    function AddMinutes(){
        if (props.Play === false)
        {
            if(props.Minutes < 59)
            props.Setminutes(props.Minutes + 1);
                
            else
            props.Setminutes(0);

            props.Setseconds(0);
        }
    }

    function SubMinutes(){
        if (props.Play === false)
        {
            if(props.Minutes > 0)
            props.Setminutes(props.Minutes - 1);
                
            else
            props.Setminutes(59);

            props.Setseconds(0);
        }
    }
    
    
    return (  
        <Fragment>
        <button type="button" className="btn btn-outline-success btn-sm p-2 d-flex justify-content-center align-items-center  w-25 mb-1" onClick={ AddMinutes }><i class="fas fa-plus"></i></button>
        <button type="button" className="btn btn-outline-success btn-sm p-2 d-flex justify-content-center align-items-center w-25 mb-1" onClick={  SubMinutes }><i class="fas fa-minus"></i></button>
        </Fragment>

        
    );
}
 
export default Plus_Minus;