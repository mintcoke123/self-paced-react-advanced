import styles from "../../css/Modal.module.css";

function ModalButton({ handleButtonOnClick, buttonType, buttonText }) {
  return (
    <div className={styles.buttonContainer}>
      <button
        type={buttonType}
        onClick={handleButtonOnClick}
        className={`${styles.button} ${styles.buttonPrimary} text-caption`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ModalButton;
