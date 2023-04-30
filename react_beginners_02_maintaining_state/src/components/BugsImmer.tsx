/* - The produce function from the immer library is used to create a new state 
     object by applying a series of "drafts" or updates to an initial state. 
     
     Here's how it works:
   - First, import the produce function from the immer library:
   - Next, define your initial state object:

const initialState = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
};

    - Now, call the produce function, passing in the initial state object and a 
    "draft" function that will make updates to the state:

const newState = produce(initialState, draft => {
  draft.age = 31;
  draft.address.city = "Othertown";
});

    - The draft function is called with a "draft" of the initial state object. This 
    draft object is a temporary, mutable copy of the state that you can make changes 
    to without modifying the original state.
    - Inside the draft function, make any necessary updates to the draft object. In 
    the example above, we're updating the age property to 31 and the city property 
    of the address object to "Othertown".
    - The produce function returns a new, updated state object that reflects the 
    changes made in the draft function. The original state object is left unchanged.

So in the example above, newState would be equal to:

{
  name: "John",
  age: 31,
  address: {
    street: "123 Main St",
    city: "Othertown",
    state: "CA"
  }
}

And the initialState object would still be equal to:

{
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
}

That's it! The produce function makes it easy to create a new state object that 
reflects updates to an existing state object, while keeping the original state 
object immutable.
 */

import React, { useState } from "react";
import styled from "styled-components";
import produce from "immer";

const BugsCSS = styled.div`
  padding: 5px 10px;
  margin: 10px 15px;
`;

const BugsLine = styled.div`
  margin: 1px;
  color: white;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 10px;
  border-radius: 5px;
`;

const Box = styled.div`
  margin: 10px 10px;
  background-color: #333333;
  padding: 10px 10px;
  border-radius: 10px;
  align-items: center;
`;

function BugsImmer() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", status: "not fixed" },
    { id: 2, title: "Bug 2", status: "not fixed" },
    { id: 3, title: "Bug 3", status: "not fixed" },
  ]);

  const fixBug1 = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.status = "is fixed";
      })
    );
  };

  const fixBug2 = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) bug.status = "is fixed";
      })
    );
  };

  const fixBug3 = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 3);
        if (bug) bug.status = "is fixed";
      })
    );
  };

  return (
    <Box>
      <Box>
        {bugs.map((bug) => (
          <BugsLine>
            ID: {bug.id} | Description: {bug.title} | status: {bug.status}
          </BugsLine>
        ))}
      </Box>
      <Box>
        <Button onClick={fixBug1}>Fix Bug 1</Button>
        <Button onClick={fixBug2}>Fix Bug 2</Button>
        <Button onClick={fixBug3}>Fix Bug 3</Button>
      </Box>
    </Box>
  );
}

export default BugsImmer;
