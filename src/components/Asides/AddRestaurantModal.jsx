import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';
import { RESTAURANT_CATEGORY_FILTER } from '../Constants/category';

const AddRestaurantModal = ({closeAddModal}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop} onClick={closeAddModal}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{TEXT.MODAL_ADD_TITLE}</h2>
        <form>
          {/* 카테고리 */}
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="category" className="text-caption">{TEXT.MODAL_CATEGORY_TEXT}</label>
            <select name="category" id="category" required>
              <option value="">{TEXT.MODAL_CATEGORY_PLACEHOLDER}</option>
              {RESTAURANT_CATEGORY_FILTER.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* 음식점 이름 */}
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="name" className="text-caption">{TEXT.NAME_LABEL}</label>
            <input type="text" name="name" id="name" required />
          </div>

          {/* 설명 */}
          <div className={styles.formItem}>
            <label htmlFor="description" className="text-caption">{TEXT.DESCRIPTION_LABEL}</label>
            <textarea name="description" id="description"  cols="30" rows="5"></textarea>
            <span className={`${styles.helpText} text-caption`}>
              {TEXT.MODAL_DESCRIPTION_FOOTER}
            </span>
          </div>

          {/* 추가 버튼 */}
          <div className={styles.buttonContainer}>
            <button className={`${styles.button} ${styles.buttonPrimary}`}>
              {TEXT.MODAL_ADD_BUTTON_TEXT}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantModal;