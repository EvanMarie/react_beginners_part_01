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

const ButtonCSS = styled.button`
  padding: 5px 20px;
  margin: 10px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
`;

const MessageCSS = styled.div`
  padding: 5px 20px;
  margin: 10px;
  font-size: 18px;
  font-family: monospace;
  background-color: cyan;
  color: #222222;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
`;

function NamesButton(props: Props) {
  const [isVisible, setIsVisible] = useState(true);
  const fullName = `${props.firstName} ${props.lastName}`;

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <ButtonCSS onClick={toggleVisibility}>Toggle Visibility</ButtonCSS>
      {isVisible && <MessageCSS>{fullName}</MessageCSS>}
    </div>
  );
}

export default NamesButton;
