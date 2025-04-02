
import styles from "../../css/Category.module.css";
import { RESTAURANT_CATEGORY_FILTER } from "../Constants/category";
import { TEXT } from "../Constants/messages";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const changeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className={styles.restaurantFilterContainer}>
      <select
        name="category"
        id="category-filter"
        className={styles.restaurantFilter}
        aria-label={TEXT.CATEGORY_FILTER_ARIA_LABEL}
        value={selectedCategory}
        onChange={changeCategory}
      >
        {RESTAURANT_CATEGORY_FILTER.map((selectedCategory) => {
          return (
            <option key={selectedCategory} value={selectedCategory}>
              {selectedCategory}

            </option>
          );
        })}
      </select>
    </section>
  );
};


export default CategoryFilter;

