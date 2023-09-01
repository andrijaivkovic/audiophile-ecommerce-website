import { motion } from "framer-motion";

import { useEffect } from "react";

import { useApp } from "../../contexts/AppContext/AppContext";

const TOAST_AUTOREMOVE_SECONDS = 2.5;

const Toast = ({ id, type = "success", message = "Test message" }) => {
  const { dispatch } = useApp();

  useEffect(() => {
    const autoRemoveTimer = setTimeout(() => {
      dispatch({ type: "toast/removed", payload: { id: id } });
    }, TOAST_AUTOREMOVE_SECONDS * 1000);

    return () => clearTimeout(autoRemoveTimer);
  }, [dispatch, id]);

  return (
    <motion.div
      key={id}
      layout={"toast"}
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={`toast toast--${type}`}
    >
      <div className="toast__icon"></div>
      <p className="toast__message">{message}</p>
    </motion.div>
  );
};

export default Toast;
