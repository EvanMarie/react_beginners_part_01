import categories from "../../categories";
import "../index.css";
import styled from "styled-components";

interface Props {
  onSelectCategory: (category: string) => void;
}

const Filter = styled.div`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin-bottom: 15px;
  font-family: monospace;
  width: 100%;
`;

const FilterSelect = styled.select`
  width: 250px;
  font-size: 15px;
`;

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <Filter>
      <FilterSelect
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">View All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </FilterSelect>
    </Filter>
  );
};

export default ExpenseFilter;
