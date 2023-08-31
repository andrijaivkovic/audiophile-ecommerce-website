import { useApp } from "../../contexts/AppContext/AppContext";
import Toast from "../Toast/Toast";

const ToastList = () => {
  const { toastNotifications } = useApp();

  return (
    <div className="toast-list">
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
    </div>
  );
};

export default ToastList;
