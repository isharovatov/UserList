import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import useOutsideClick from "../../Hooks/outsideClick";

const Modal = ({ isOpen, onClose, onContinue, value }) => {
  const [changingValue, setChangingValue] = useState("");
  const [error, setError] = useState("");
  const [firstRender, setFirstRender] = useState(true);
  const OutsideClick = useOutsideClick;
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const myGreeting = setTimeout(() => {
    if (firstRender) {
      setChangingValue(value);
      setFirstRender(false);
    }
  }, 0);

  const handelInput = (e) => {
    if (!e.target.value) setError("Имя не можеть быть пустым");
    else setError("");
    setChangingValue(e.target.value);
  };

  const handelClose = () => {
    setError('');
    setFirstRender(true);
    onClose();
  };

  const handelContinue = () => {
    if (!error)
    {
      setError('');
      setFirstRender(true);
      onContinue(changingValue);
    }
  };

  OutsideClick(isOpen, modalRef, handelClose);

  return ReactDOM.createPortal(
    <div className="rootModal">
      <div className="modal" ref={modalRef} id="modal">
        <button className="close" onClick={() => handelClose()}>
          x
        </button>
        <span className="text">Хотите изменить имя?</span>
        <input value={changingValue} onInput={(e) => handelInput(e)} />
        {!error.lenght && <div className="error">{error}</div>}
        <div className="buttons">
          <button onClick={() => handelClose()}>Отмена</button>
          <button onClick={() => handelContinue()}>Продолжить</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
