import React from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  color: deeppink;
  background-color: cyan;
  margin: 10px;
  padding: 0 10px;
  border-radius: 5px;
  font-size: 13px;
`;

/* defining count here will keep component pure as long as changes do not
take place inside of the rendering of the component
- multiple instances of the component will render same count
let count = 0; */

const MessageImpure = () => {
  /* to keep component pure, keep state changes out of the component itself
  count++;
  but if you define count here, you can also change here */

  let count = 0;
  count++;
  return (
    <MessageDiv>
      <h1>Count: {count}</h1>
    </MessageDiv>
  );
};

export default MessageImpure;
