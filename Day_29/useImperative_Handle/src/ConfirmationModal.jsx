import React, { useImperativeHandle, useRef } from "react";

function ConfirmationModal({ isOpen, onClose }, ref) {
  const closeRef = useRef();
  const denyRef = useRef();
  const confirmRef = useRef();

  useImperativeHandle(
    ref,
    () => ({
      focusClosebtn: () => closeRef.current.focus(),
      focusDenybtn: () => denyRef.current.focus(),
      focusConfirmbtn: () => confirmRef.current.focus(),
    }),
    []
  );

  return (
    <div className="h-80 w-60 bg-white rounded-xl ">
      <button className="text-black ml-52" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="text-black text-2xl font-bold">Title</div>
      <div className="text-black text-xl mt-10">Do You Confirm?</div>
      <button className="bg-lime-400 mt-30" ref={confirmRef}>
        Yes
      </button>
      <button className="bg-red-400" ref={denyRef}>
        No
      </button>
    </div>
  );
}

export default React.forwardRef(ConfirmationModal);


