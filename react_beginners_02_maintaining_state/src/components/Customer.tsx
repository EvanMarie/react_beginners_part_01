import React, { useState } from "react";
import styled from "styled-components";

const CustomerCSS = styled.div`
  display: flex;
  background-color: #333333;
  padding: 10px 15px;
  border-radius: 10px;
  color: cyan;
  font-family: monospace;
  flex-direction: column;
  align-items: left;
  margin: 10px;
`;

const Button = styled.button`
  padding: 5px 20px;
  margin: 10px 10px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
`;

const CustomerLine = styled.p`
  margin: 1px;
  font-size: 16px;
`;

function Customer() {
  const [customer, setCustomer] = useState({
    name: "Evan Marie Carr",
    age: 44,
    address: {
      street: "10585 Haynes Forest Drive",
      city: "Alpharetta",
      state: "GA",
      zip: 30022,
    },
    phone: "678-520-0677",
  });

  const handleClick = () => {
    setCustomer({
      /* spread operator makes a shallow copy when creating a new object
        in nested objects, changing properties requires an operation
        that is more complex than a shallow copy */

      ...customer,
      address: { ...customer.address, zip: 30023 },
    });
  };

  return (
    <CustomerCSS>
      <Button onClick={handleClick}>Update Customer Zip</Button>
      <CustomerLine>Name: {customer.name}</CustomerLine>
      <CustomerLine>Age: {customer.age}</CustomerLine>
      <CustomerLine>Address: {customer.address.street}</CustomerLine>
      <CustomerLine>City: {customer.address.city}</CustomerLine>
      <CustomerLine>State: {customer.address.state}</CustomerLine>
      <CustomerLine>Zip: {customer.address.zip}</CustomerLine>
      <CustomerLine>Customer Phone: {customer.phone}</CustomerLine>
    </CustomerCSS>
  );
}

export default Customer;
