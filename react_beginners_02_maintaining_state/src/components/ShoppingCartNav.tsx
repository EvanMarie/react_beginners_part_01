import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 10px 10px;
  font-size: 23px;
  font-weight: bold;
  background-color: #333333;
  color: deeppink;
  padding: 10px 10px;
  border-radius: 10px;
  align-items: center;
`;

interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <Box>Total Items in Cart: {cartItemsCount}</Box>;
};

export default NavBar;
