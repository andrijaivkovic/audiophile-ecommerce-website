import { AnimatePresence } from "framer-motion";

import { useApp } from "../../contexts/AppContext/AppContext";

import Toast from "../Toast/Toast";

const ToastList = () => {
  const { toastNotifications } = useApp();

  return (
    <div className="toast-list">
      <AnimatePresence initial="false">
        {toastNotifications.map((toast) => {
          return (
            <Toast
              key={toast.id}
              id={toast.id}
              type={toast.type}
              message={toast.message}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default ToastList;
