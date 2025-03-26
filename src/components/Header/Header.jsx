import styles from '../../css/Header.module.css';
import addButton from '../../assets/button/add-button.png';

const Header = () => {
  return(
    <header className={styles.gnb}>
    <h1 class={`${gnb__title} text-title`}>점심 뭐 먹지</h1>
    <button type="button" class="gnb__button" aria-label="음식점 추가">
      <img src={addButton} alt="음식점 추가"/>
    </button>
  </header>
  );
};