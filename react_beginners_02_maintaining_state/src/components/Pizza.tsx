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
  margin: 10px 10px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
`;

function Pizza() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom,"],
  });

  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Extra Cheese,"],
    });
  };

  return (
    <Box>
      <p>Pizza: {pizza.name}</p>
      <p>Toppings: {pizza.toppings}</p>
      <Button onClick={handleClick}>Gimme Cheese!</Button>
    </Box>
  );
}

export default Pizza;
