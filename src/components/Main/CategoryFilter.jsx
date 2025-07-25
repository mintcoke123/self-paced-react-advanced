import styled from 'styled-components';
import { RESTAURANT_CATEGORY_FILTER } from '../../constants/category';
import { TEXT } from '../../constants/messages';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from '../../recoil/atoms';

const CategoryFilterContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 24px;
`;

const CategorySelect = styled.select`
  height: 44px;
  min-width: 125px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  background: transparent;
  font-size: 16px;
  padding: 8px;
`;

function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(
    selectedCategoryState
  );

  const handleChangeCategory = event => {
    setSelectedCategory(event.target.value);
  };

  return (
    <CategoryFilterContainer>
      <CategorySelect
        name="category"
        id="category-filter"
        aria-label={TEXT.CATEGORY_FILTER_ARIA_LABEL}
        value={selectedCategory}
        onChange={handleChangeCategory}
      >
        {RESTAURANT_CATEGORY_FILTER.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </CategorySelect>
    </CategoryFilterContainer>
  );
}

export default CategoryFilter;
