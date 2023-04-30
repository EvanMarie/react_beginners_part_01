import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

const Text = styled.p`
  font-size: 13px;
  color: deeppink;
  margin: 5px;
`;

interface FormData {
  name: string;
  age: number;
}

const Validation = () => {
  // nested destructuing to acces errors from formState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(register("name"));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* if you get an error for the name field, and type = required, print this */}
        {errors.name?.type === "required" && <Text>Name required.</Text>}
        {/* if you get an error for the name field, and type = minLength, print this */}
        {errors.name?.type === "minLength" && (
          <Text>Name must have at least 3 characters.</Text>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Validation;
