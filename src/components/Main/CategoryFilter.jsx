import styles from '../../css/Category.module.css';
import { RESTAURANT_CATEGORY_FILTER } from '../Constants/category';
import { TEXT } from '../Constants/messages';

const CategoryFilter = () => {
  return (
    <section className={styles.restaurantFilterContainer}>
      <select
        name="category"
        id="category-filter"
        className={styles.restaurantFilter}
        aria-label={TEXT.CATEGORY_FILTER_ARIA_LABEL}
      >
        {RESTAURANT_CATEGORY_FILTER.map((category) => {
          return (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          );
        })}
      </select>
    </section>
  );
};