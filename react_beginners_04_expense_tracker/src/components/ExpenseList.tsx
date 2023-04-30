import styled from "styled-components";
import "../index.css";

const Box = styled.div`
  margin: 0 auto;
  border: white;
  font-family: monospace;
  max-width: 600px;
`;

const RemoveCol = styled.td`
  text-align: center;
  vertical-align: middle;
`;

const RemoveButton = styled.button`
  color: white;
  display: inline-block !important;
  margin: 4px 4px;
`;

const Total = styled.tr`
  border-bottom: none;
  background-color: #444444;
`;

const Nothing = styled.div`
  color: white;
  text-align: center;
  font-family: monospace;
  font-size: 18px;
`;

const DescCol = styled.td`
  text-align: left;
  margin-right: 20px;
`;

const CostCol = styled.td`
  text-align: right;
  margin-right: 30px;
`;

const CatCol = styled.td`
  text-align: left;
  margin-left: 20px;
`;

// definition of an Expense object
interface Expense {
  id: number;
  description: string;
  cost: number;
  category: string;
}

// expenses will be an array of Expense objects
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  // if there are no expenses to be shown, show no list and a message
  if (expenses.length === 0)
    return (
      <Nothing>
        There are no expenses to show. <br /> Have a great day!
      </Nothing>
    );
  return (
    <Box>
      <table className="table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Cost</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* mapping expenses to their own rows in the expenses list */}
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <DescCol>{expense.description}</DescCol>
              <CostCol>${expense.cost.toFixed(2)}</CostCol>
              <CatCol>{expense.category}</CatCol>
              <RemoveCol>
                <RemoveButton
                  className="btn btn-outline-light"
                  onClick={() => onDelete(expense.id)}
                >
                  X
                </RemoveButton>
              </RemoveCol>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <Total>
            <td>Total</td>
            <td>
              $
              {expenses
                // acc keeps track of the running total, as costs are iteratively added
                .reduce((acc, expense) => expense.cost + acc, 0)
                .toFixed(2)}
            </td>
            <td>{}</td>
            <td>{}</td>
          </Total>
        </tfoot>
      </table>
    </Box>
  );
};

export default ExpenseList;
