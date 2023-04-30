import React, { useState } from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  color: cyan;
  background-color: deeppink;
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 13px;
`;

const CountDiv = styled.div`
  color: cyan;
  text-align: center;
  font-size: 18px;
  padding: 5px 10px;
`;

const MessagePure = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <MessageDiv>
      <CountDiv>Count: {count}</CountDiv>
      <button onClick={handleClick}>Increment Count</button>
    </MessageDiv>
  );
};

export default MessagePure;
