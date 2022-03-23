import { useState } from "react";
import s from "../Modal/Modal.module.css";

export const Modal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setIsOpenModal(true)}>
        Open modal
      </button>
      {isOpenModal && (
        <div className={s.modal}>
          <div className={s.modal__body}>
            <h1>Modal title</h1>
            <p>I am awesome modal!</p>
            <button type="button" onClick={() => setIsOpenModal(false)}>
              Close modal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
