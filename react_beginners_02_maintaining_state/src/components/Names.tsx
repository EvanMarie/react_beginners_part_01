import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  firstName: string;
  lastName: string;
}

const NameDiv = styled.div`
  color: deeppink;
  background-color: cyan;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 16px;
  margin: 10px;
`;

function Names(props: Props) {
  // names individually stored in state
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  // names stored in state as an object, better than deeply nested state
  const [person, setPerson] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
  });

  // full name stored in state
  const fullName = `${person.firstName} ${person.lastName}`;

  // function is loading: manages showing spinner to user
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <NameDiv>{fullName}</NameDiv>
    </div>
  );
}

export default Names;
