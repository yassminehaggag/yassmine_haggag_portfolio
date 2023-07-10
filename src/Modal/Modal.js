import { useState } from "react";

import "./Modal.scss";

function Modal(props) {
  const [modal, setModal] = useState(true);

  return (
    <>
      {modal && (
        <div className={`modalContainer`}>
          <button onClick={() => setModal(false)}>x</button>
        </div>
      )}
    </>
  );
}

export default Modal;
