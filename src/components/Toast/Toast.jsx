import { useEffect } from "react";

import { useApp } from "../../contexts/AppContext/AppContext";

const TOAST_AUTOREMOVE_SECONDS = 4;

const Toast = ({ id, type = "success", message = "Test message" }) => {
  const { dispatch } = useApp();

  useEffect(() => {
    const autoRemoveTimer = setTimeout(() => {
      dispatch({ type: "toast/removed", payload: { id: id } });
    }, TOAST_AUTOREMOVE_SECONDS * 1000);

    return () => clearTimeout(autoRemoveTimer);
  }, [dispatch, id]);

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__icon"></div>
      <p className="toast__message">{message}</p>
    </div>
  );
};

export default Toast;
