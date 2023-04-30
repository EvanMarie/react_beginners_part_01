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

function ItemQuanities() {
  const [itemQuants, setItemQuants] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
      { id: 3, title: "Product 3", quantity: 3 },
    ],
  });

  const handleClick = () => {
    setItemQuants({
      ...itemQuants,
      items: itemQuants.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <Box>
      {itemQuants.items.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <Button onClick={handleClick}>Add to quantity</Button>
    </Box>
  );
}

export default ItemQuanities;
