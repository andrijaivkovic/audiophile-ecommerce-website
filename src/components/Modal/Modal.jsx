const Modal = ({ children, callback }) => {
  return (
    <>
      <div onClick={callback} className="modal__backdrop"></div>
      <div className="modal__container">{children}</div>
    </>
  );
};

export default Modal;
