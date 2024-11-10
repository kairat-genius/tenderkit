import React, {memo} from "react";
import "../../css/toast.css";

const Toast = memo(({ message, type }) => {
  if (!message) return null;
  return (
    <div id="toastBox">
      <div className={`toast ${type}`}>
        <img src={`/assets/toast/${type}.png`} alt={type} /> {message}
      </div>
    </div>
  );
});

export default Toast;


