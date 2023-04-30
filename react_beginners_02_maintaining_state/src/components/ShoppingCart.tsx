import React, { useState } from "react";
import styled from "styled-components";
import Cart from "./ShoppingCart2";
import NavBar from "./ShoppingCartNav";

const Box = styled.div`
  margin: 10px 10px;
  background-color: #333333;
  color: white;
  padding: 5px 40px;
  border-radius: 10px;
  align-items: center;
`;

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    "Product 01",
    "Product 02",
    "Product 03",
  ]);

  /* onClear is here instead of Cart, because this function controls state -
    This will set the items to an empy array */
  return (
    <Box>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => {
          setCartItems([]);
        }}
      />
    </Box>
  );
}

export default ShoppingCart;
