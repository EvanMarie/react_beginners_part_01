import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 10px 10px;
  font-size: 17px;
  font-weight: bold;
  background-color: #333333;
  color: cyan;
  padding: 10px 15px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin-top: 10px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
  width: 100px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 5px;
`;

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars) + "...";
  return (
    <TextContainer>
      {text}
      <Button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </Button>
    </TextContainer>
  );
};

export default ExpandableText;
