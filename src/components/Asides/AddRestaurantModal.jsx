import styles from '../../css/Modal.module.css';
import { TEXT } from '../Constants/messages';
import { ADD_RESTAURANT_CATEGORY_FILTER } from '../Constants/category';
import { CATEGORY_ICONS } from '../Constants/icons';
import Modal from '../Common/Modal';
import ModalButton from '../Common/ModalButton';

function AddRestaurantModal({ closeAddModal, addRestaurantData }) {
  const handleSubmitRestaurantData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const category = formData.get('category');
    const name = formData.get('name');
    const description = formData.get('description');

    const newRestaurant = {
      id: Date.now(),
      category,
      name,
      description,
      alt: category,
      categoryIcon: CATEGORY_ICONS[category],
    };

    addRestaurantData(newRestaurant);
    closeAddModal();
  };
  return (
    <Modal closeModal={closeAddModal} modalTitle={TEXT.MODAL_ADD_TITLE}>
      <form onSubmit={handleSubmitRestaurantData}>
        {/* 카테고리 */}
        <div className={`${styles.formItem} ${styles.formItemRequired}`}>
          <label htmlFor="category" className="text-caption">{TEXT.MODAL_CATEGORY_TEXT}</label>
          <select name="category" id="category" required>
            <option value="">{TEXT.MODAL_CATEGORY_PLACEHOLDER}</option>
            {ADD_RESTAURANT_CATEGORY_FILTER.map((category) => (
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
          <textarea name="description" id="description" cols="30" rows="5" />
          <span className={`${styles.helpText} text-caption`}>
            {TEXT.MODAL_DESCRIPTION_FOOTER}
          </span>
        </div>

        {/* 추가 버튼 */}

        <ModalButton buttonType="submit" buttonText={TEXT.MODAL_ADD_BUTTON_TEXT} />
      </form>
    </Modal>
  );
}

export default AddRestaurantModal;
