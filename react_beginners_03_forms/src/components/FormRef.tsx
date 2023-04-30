import React, { FormEvent, useRef } from "react";
import styled from "styled-components";

/* 
* In the submit:
    - must prevent the default behavior of posting to the server by:
        event.preventDefault()

* to create the form element with Bootstrap shortcuts, inside the <form>, 
        we typed and tabbed for auto:
     div.mb-3>label.form-label+input.form-control
     this created the div element below via bootstrap
     - div with a class of mb-3 (margin-bottom: 3px)
     - label with a class of form-label
     - input with a class of form-control

* set the htmlFor to the id of the input so that when selected, it autofocuses

* second form field: div.mb-3>label.form-label+input[type=number].form-control
     - sets the type of input to number

* the button: button.btn.btn-primary[type=submit]
     - two classes, and type is submit

* useRef is a built-in hook in React that allows you to create a mutable object 
that persists for the lifetime of the component. This object can hold a reference 
to a DOM element or any other value that needs to be persisted across renders.
    - When using useRef with TypeScript, you'll typically want to define the type 
    of the value that the ref will hold. For example, if you're using useRef to 
    hold a reference to a DOM element, you might define the type as 
    React.RefObject<HTMLDivElement>. This tells TypeScript that the ref will hold 
    a reference to a div element.
    - Here's an example of how you might use useRef in a TypeScript component:

            import { useRef } from 'react';

            function MyComponent() {
            const inputRef = useRef<HTMLInputElement>(null);

            const handleClick = () => {
                if (inputRef.current) {
                inputRef.current.focus();
                }
            };

            return (
                <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleClick}>Focus Input</button>
                </div>
            );
            }

    - We're then using the current property of the ref to check if the input element 
    exists, and if so, calling its focus method to bring it into focus.
    - HTMLINputElement tells UseRef that the the kind of input to expect. This is 
    standard to all browsers.
    - other elements that can be referenced like lists, etc.
    - every ref object has to be initialized as null
   */

const FormRef = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age:
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormRef;
