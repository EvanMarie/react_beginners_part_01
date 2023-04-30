import React from "react";
import styled from "styled-components";

const ButtonMain = styled.button`
  background-color: cyan;
  font-size: 17px;
  color: deeppink;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 2px 2px 4px deeppink;
`;

const ButtonSecondary = styled.button`
  background-color: deeppink;
  font-size: 17px;
  color: #222222;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 2px 2px 4px cyan;
`;

/* ? after a property name means that the property is optional 
   - instead of setting the default value as string, we can 
     list value options separated by | */

interface Props {
  children: string;
  color?:
    | "primary"
    | "danger"
    | "warning"
    | "success"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}

/* parent component will pass onCLick function as a prop */

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <ButtonMain className={"btn btn-" + color} onClick={onClick}>
      {children}
    </ButtonMain>
  );
};

export default Button;
