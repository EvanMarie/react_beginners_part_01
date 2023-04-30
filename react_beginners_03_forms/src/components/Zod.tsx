/* ZOD FORM VALIDATION: Zod.dev
-  defines a schema object using zod. The schema defines the shape of the form data and 
the validation requirements for each field
-  z.object defines an object schema.
-  z.string() defines a string schema.
-  z.number() defines a number schema.
-  min sets a minimum length or value for the field.
-  message sets a custom error message for each field.
-  invalid_type_error sets a custom error message for the number schema if the value is 
not a number.
- z.infer to define a FormData type:
- This type will be used in the useForm hook to infer the type of the form data
- Inside ZodValidation, the code uses the useForm hook to register form fields and 
validate form data
- register is a function that registers a form field with react-hook-form.
- handleSubmit is a function that handles form submission.
- formState is an object that contains the form state and errors.
- resolver is a hook from @hookform/resolvers/zod that uses the zod schema to validate 
form data
*/

import React, { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";

const Text = styled.p`
  font-size: 13px;
  color: deeppink;
  margin: 5px;
`;

/* returns an object that stores the shape and validation requirements
of the form 
- defining a custom error message rather than the default 
- notice the differences in the error message objects passed for name vs. age */

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

/* do not have to define the types in an interface, instead
can use z.infer and pass it to the types declared in the schema */
type FormData = z.infer<typeof schema>;

const ZodValidation = () => {
  // pass the resolver when declaring the useForm hook and pass schema object
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

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
        {errors.name && <Text>{errors.name.message}</Text>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        {/* rather than parseInt on age, we use the unique attribute valueAsNumber */}
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <Text>{errors.age.message}</Text>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ZodValidation;
