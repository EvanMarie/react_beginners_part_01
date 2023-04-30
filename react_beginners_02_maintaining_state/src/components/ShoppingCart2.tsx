import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 10px 10px;
  background-color: #333333;
  padding: 10px 10px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
`;

const YourShopping = styled.div`
  font-size: 17px;
  color: cyan;
`;

const Items = styled.ul`
  list-style: none;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin: 10px 10px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
`;

interface Props {
  cartItems: string[];
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <Box>
      <YourShopping>Your Shopping Cart:</YourShopping>
      <Items>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Items>
      <Button onClick={onClear}>Clear Cart</Button>
    </Box>
  );
};

export default Cart;
