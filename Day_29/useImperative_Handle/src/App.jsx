import React, { useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

function App() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={handleOpen}>Open</button>
      <button onClick={() => modalRef.current.focusClosebtn()}>
        Focus Close
      </button>
      <button onClick={() => modalRef.current.focusConfirmbtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current.focusDenybtn()}>
        Focus Deny
      </button>

      <ConfirmationModal ref={modalRef} isOpen={open} onClose={handleClose} />
    </>
  );
}

export default App;
