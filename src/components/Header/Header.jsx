import styles from '../../css/Header.module.css';
import { TEXT } from '../Constants/messages';
import { BUTTON_ICONS } from '../Constants/icons';

const Header = () => {
  return (
    <header className={styles.gnb}>
      <h1 className={`${styles.gnb__title} text-title`}>{TEXT.HEADER_TITLE}</h1>
      <button
        type="button"
        className={styles.gnb__button}
        aria-label={TEXT.ADD_BUTTON_ARIA_LABEL}
      >
        <img src={BUTTON_ICONS.ADD} alt={TEXT.ADD_BUTTON_ARIA_LABEL} />
      </button>
    </header>
  );
};

export default Header;