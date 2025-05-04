import styles from "../../css/Modal.module.css";

function Modal({ handleCloseModal, children, modalTitle }) {
  return (
    <div className={styles.modalOpen}>
      <div className={styles.modalBackdrop} onClick={handleCloseModal} />
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{modalTitle}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;
