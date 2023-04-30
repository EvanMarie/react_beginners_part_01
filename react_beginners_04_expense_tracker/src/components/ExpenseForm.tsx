import categories from "../../categories";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import "../index.css";

const AddButton = styled.button`
  color: yellow;
  background-color: deeppink;
  font-size: 16px;
  font-weight: bold;
  display: inline-block !important;
  margin: 4px 8px;
  width: 300px;
  margin: 0 auto;
`;

const ExpenseInput = styled.input`
  width: 300px;
  margin: 0 auto;
  font-size: 13px;
`;

const SelectCategory = styled.select`
  width: 300px;
  margin: 0 auto;
`;

const ErrorMessage = styled.p`
  color: deeppink;
`;

// setting up Zod validation
const schema = z.object({
  description: z
    .string()
    .min(3, {
      message: "Must contain 3+ characters.",
    })
    .max(50),
  cost: z
    .number({
      invalid_type_error: "Cost required.",
    })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="form_box">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <ExpenseInput
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <ErrorMessage>{errors.description.message}</ErrorMessage>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="cost" className="form-label">
            Cost:
          </label>
          <ExpenseInput
            {...register("cost", { valueAsNumber: true })}
            id="cost"
            type="number"
            className="form-control"
          />
          {errors.cost && <ErrorMessage>{errors.cost.message}</ErrorMessage>}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category:
          </label>
          <SelectCategory
            {...register("category")}
            id="category"
            className="form-select"
          >
            <option value=""></option>
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SelectCategory>
          {errors.category && (
            <ErrorMessage>{errors.category.message}</ErrorMessage>
          )}
        </div>
        <AddButton className="btn btn-light">Add Expense</AddButton>
      </form>
      <hr></hr>
    </div>
  );
};

export default ExpenseForm;
