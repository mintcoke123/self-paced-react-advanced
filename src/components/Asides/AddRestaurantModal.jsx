import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';
import { RESTAURANT_CATEGORY_FILTER } from '../Constants/category';

const AddRestaurantModal = ({ onSubmit }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBackdrop}></div>
      <div className={styles.modalContainer}>
        <h2 className={`${styles.modalTitle} text-title`}>{TEXT.MODAL_ADD_TITLE}</h2>
        <form onSubmit={onSubmit}>
          {/* 카테고리 */}
          <div className={`${styles.formItem} ${styles.formItemRequired}`}>
            <label htmlFor="category" className="text-caption">카테고리</label>
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
            <label htmlFor="name" className="text-caption">이름</label>
            <input type="text" name="name" id="name" required />
          </div>

          {/* 설명 */}
          <div className={styles.formItem}>
            <label htmlFor="description" className="text-caption">설명</label>
            <textarea name="description" id="description" rows="5" />
            <span className={`${styles.helpText} text-caption`}>
              {TEXT.MODAL_DESCRIPTION_HELP}
            </span>
          </div>

          {/* 추가 버튼 */}
          <div className={styles.buttonContainer}>
            <button type="submit" className={`${styles.button} ${styles.buttonPrimary} text-caption`}>
              {TEXT.MODAL_ADD_BUTTON}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantModal;