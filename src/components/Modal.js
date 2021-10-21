import React from "react";
import { useRef } from "react";

const Modal = (props) => {

    const element = useRef();
    const close = useRef();

    if( props.Seconds == 0 && props.Minutes == 0)
    {
      const inputE1 = element.current;
      inputE1.style.display = "flex";
    }

    function closeModal (){
      const inputE1 = close.current;
      inputE1.style.display = "none";
     
    
    }
        return (
          <div className="modal d-flex justify-content-center align-items-center" ref={close} ref={element} tabindex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary"  onClick={ () => closeModal() }>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
          );
    
 
};

export default Modal;
