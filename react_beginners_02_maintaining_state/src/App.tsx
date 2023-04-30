/* UNDERSTANDING STATE:
  - State is a way to store data in a component
  - State Hooks cannot be used inside of conditional statements
  - State Hooks must be used at the top level of a component
  - The state is stored in an array of states, which are accessed by index and
  mapped to a variable name 
  -  State is private and fully controlled by the component that defines it. 
  Other components cannot directly access or modify another component's state.
  - State should be kept to a minimum and only include data that is necessary 
  for the component to function correctly.
  - State updates can be asynchronous, which means that it batches updates and
  applies them all at once and then re-renders the state with the new variables. */

import React, { useState } from "react";
import styled from "styled-components";
import Names from "./components/Names";
import MessageImpure from "./components/MessageImpure";
import MessagePure from "./components/MessagePure";
import NamesButton from "./components/NamesButton";
import Drink from "./components/Drink";
import Customer from "./components/Customer";
import Tags from "./components/Tags";
import Bugs from "./components/Bugs";
import BugsImmer from "./components/BugsImmer";
import ShoppingCart from "./components/ShoppingCart";
import Game from "./components/Game";
import Pizza from "./components/Pizza";
import ItemQuantites from "./components/ItemQuantities";
import ExpandableText from "./components/ExpandableText";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  height: 215px;
`;

const TextContainer = styled.div`
  width: 400px;
  background-color: deeppink;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 10px;
`;

const ButtonCSS = styled.button`
  padding: 5px 20px;
  margin: 10px;
  font-family: monospace;
  font-size: 16px;
  border-radius: 5px;
`;

const NamesButtonsCSS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setApproval] = useState(true);

  const handleClick = (isVisible: boolean) => {
    setVisibility(isVisible);
  };

  return (
    <Container>
      <InnerContainer>
        <div>
          <ButtonCSS onClick={() => handleClick(true)}>Make Visible</ButtonCSS>
          <ButtonCSS onClick={() => handleClick(false)}>
            Make Invisible
          </ButtonCSS>
        </div>

        <div>
          {isVisible && (
            <>
              <Names firstName="Evan Marie" lastName="Carr" />
              <Names firstName="Cheese" lastName="Burger" />
            </>
          )}
        </div>
      </InnerContainer>
      <>
        {/* <div>
          <MessageImpure />
          <MessageImpure />
        </div> */}
        <InnerContainer>
          <MessagePure />
          <MessagePure />
        </InnerContainer>
      </>
      <InnerContainer>
        <NamesButtonsCSS>
          <NamesButton firstName="Evan Marie" lastName="Carr" />
          <NamesButton firstName="Emma" lastName="Stefanuk" />
        </NamesButtonsCSS>
      </InnerContainer>

      <InnerContainer>
        <Drink />
      </InnerContainer>

      <InnerContainer>
        <Customer />
      </InnerContainer>

      <InnerContainer>
        <Tags />
      </InnerContainer>

      <InnerContainer>
        <Bugs />
      </InnerContainer>

      <InnerContainer>
        <BugsImmer />
      </InnerContainer>

      <InnerContainer style={{ height: "325px" }}>
        <ShoppingCart />
      </InnerContainer>

      <InnerContainer>
        <Game />
      </InnerContainer>

      <InnerContainer>
        <Pizza />
      </InnerContainer>

      <InnerContainer style={{ height: "325px" }}>
        <ItemQuantites />
      </InnerContainer>

      <InnerContainer>
        <TextContainer>
          <ExpandableText maxChars={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            error maiores consequatur aspernatur id at, voluptates delectus
            molestiae deserunt doloremque sequi ullam similique nulla reiciendis
            doloribus ex dolor facilis quasi, voluptatibus recusandae iusto,
            atque sunt veritatis corrupti. Magnam incidunt, quos, et inventore
            earum praesentium at similique tempore pariatur hic accusamus iure.
            Repudiandae nostrum, doloribus itaque suscipit optio repellendus.
            Illo dolore explicabo deleniti dolorem ad porro ullam officiis hic
            sed architecto? Non aut a maxime doloremque quas aspernatur minima,
            nesciunt officia rem in libero nisi nulla maiores necessitatibus.
            Velit delectus beatae autem sunt molestiae nulla cupiditate, a
            quibusdam, quidem magnam nostrum.
          </ExpandableText>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
}

export default App;
