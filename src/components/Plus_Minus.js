import React, { Fragment } from "react";
import { useState, useEffect } from "react";

const Plus_Minus = (props) => {
    
    
    return (  
        <Fragment>
        <button type="button" className="btn btn-outline-success btn-sm p-2 d-flex justify-content-center align-items-center  w-25 mb-1" onClick={() => props.Minutes < 59 ? props.Setminutes(props.Minutes + 1) : props.Setminutes(0) }><i class="fas fa-plus"></i></button>
        <button type="button" className="btn btn-outline-success btn-sm p-2 d-flex justify-content-center align-items-center w-25 mb-1" onClick={() => props.Minutes > 0 ? props.Setminutes(props.Minutes - 1) : props.Setminutes(59)}><i class="fas fa-minus"></i></button>
        </Fragment>

        
    );
}
 
export default Plus_Minus;