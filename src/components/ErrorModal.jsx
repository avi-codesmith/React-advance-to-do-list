import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ErrorModal({ children, ref }) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="errorModal">
      <form method="dialog">
        <button>×</button>
      </form>
      {children}
    </dialog>,
    document.getElementById("rootModal")
  );
}
