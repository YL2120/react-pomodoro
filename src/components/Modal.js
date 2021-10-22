import React from "react";
import { useRef } from "react";

const Modal = (props) => {
  const element = useRef(0);

  if (props.Seconds === 0 && props.Minutes === 0 && props.Play === false)
  {
    element.current.style.display = "flex";
  }
    

  function closeModal() {
    element.current.style.display = "none";
  }

  function Restart(){
    element.current.style.display = "none";
    const intmins = localStorage.getItem("minu");
    const intsecu = localStorage.getItem("secu");
    props.Setminutes(parseInt(intmins));
    props.Setseconds(parseInt(intsecu));
  }
  return (
    
<div className="modal mt-5" ref={element} tabindex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header  border border-left">
        <h5 className="modal-title text-white text-center p-0">Pomodoro is over !</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body border border-left text-white h-25">
        <p className="">Do you want to close this box or restart the pomodoro ?</p>
      </div>
      <div className="modal-footer border border-white d-flex justify-content-center align-items-center">
        <button type="button" className="btn btn-secondary" onClick={closeModal} data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success" onClick={Restart}>Restart</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Modal;
