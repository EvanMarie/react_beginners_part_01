/* Hook Form - Form Attributes:
- use console.log(form); to get info on the methods

    * useForm(): This is the main function provided by React Hook Form that initializes 
    the form and returns a set of methods and properties that can be used to manage 
    the form state. It takes an optional configuration object as a parameter, which 
    can be used to customize the behavior of the form.

    * register(): This function is used to register an input field with the form. It 
    takes a name attribute as a parameter and returns an object with several properties 
    that can be used to bind the input field to the form state.

    * handleSubmit(): This function is used to handle the submission of the form. It 
    takes a callback function as a parameter, which is called when the form is 
    submitted.

    * errors: This is a property that contains the validation errors for each input 
    field in the form. It is an object where the keys are the names of the input 
    fields and the values are the error messages.

    * watch(): This function is used to watch for changes to specific input fields 
    in the form. It takes an optional parameter that specifies the name of the 
    input field to watch and returns the current value of the input field.

    * setError(): This function is used to manually set validation errors for an 
    input field. It takes the name of the input field and the error message as 
    parameters.

    * clearErrors(): This function is used to clear the validation errors for an 
    input field. It takes the name of the input field as a parameter.
*/

import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";

const HookForm = () => {
  const form = useForm();
  const { register, handleSubmit } = useForm();

  console.log(register("name"));

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
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

export default HookForm;
