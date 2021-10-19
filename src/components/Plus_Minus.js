import React, { Fragment } from "react";
import { useState, useEffect } from "react";

const Plus_Minus = () => {
    
    const [ minutes, setMinutes ] = useState();
    

    function AddMinutes () {
        setMinutes(minutes + 1);
    }


    return (  
        <Fragment>
        <button type="button" className="btn btn-outline-success btn-sm p-2 d-flex justify-content-center align-items-center  w-25 mb-1" onClick={() => setTime(minutes => minutes + 1)}><i class="fas fa-plus"></i></button>
        <button type="button" className="btn btn-outline-success btn-sm p-2 d-flex justify-content-center align-items-center w-25 mb-1"><i class="fas fa-minus"></i></button>
        </Fragment>

        
    );
}
 
export default Plus_Minus;