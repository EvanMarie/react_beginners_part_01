import React, { useState } from "react";
import styled from "styled-components";

const DrinkCSS = styled.div`
  display: flex;
  background-color: #222222;
  color: cyan;
  padding: 10px, 15px;
  border-radius: 10px;
  font-family: monospace;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 10px;
`;

const DrinkLine = styled.p`
  margin: 1px;
  font-size: 16px;
`;

const Box = styled.div`
  margin: 10px 10px;
  background-color: #333333;
  padding: 10px 10px;
`;

function Drink() {
  const [drink, setDrink] = useState({
    name: "Americano",
    price: 3.99,
    size: "medium",
  });

  const handleClick = () => {
    /* keeps all the properties of drink that are the same
    and only updates the price.
    This is one reason to avoid deeply nested structures. */
    setDrink({ ...drink, price: 4.99 });
  };

  return (
    <DrinkCSS>
      <button onClick={handleClick}>Update Drink Price</button>
      <Box>
        <DrinkLine>Drink: {drink.name}</DrinkLine>
        <DrinkLine>Price: {drink.price}</DrinkLine>
        <DrinkLine>Size: {drink.size}</DrinkLine>
      </Box>
    </DrinkCSS>
  );
}

export default Drink;
