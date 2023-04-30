import React from "react";
import FormRef from "./components/FormRef";
import FormState from "./components/FormState";
import HookForm from "./components/HookForm";
import Validation from "./components/Validation";
import ZodValidation from "./components/Zod";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  background: cyan;
  border-radius: 10px;
  width: 375px;
`;

const InnerContainer = styled.div`
  height: 300px;
  font-size: 18px;
  font-weight: bold;
`;

const Describe = styled.p`
  font-size: 13px;
  margin: 0;
  color: purple;
`;

const App = () => {
  return (
    <Container>
      <InnerContainer>
        <Describe>(For with useRef)</Describe>
        <FormRef />
      </InnerContainer>

      <InnerContainer>
        <Describe>(Form with useState)</Describe>
        <FormState />
      </InnerContainer>

      <InnerContainer>
        <Describe>(Form with HookForm)</Describe>
        <HookForm />
      </InnerContainer>

      <InnerContainer>
        <Describe>(Form with HookForm and Validation)</Describe>
        <Validation />
      </InnerContainer>

      <InnerContainer>
        <Describe>(Form with HookForm and Zod)</Describe>
        <ZodValidation />
      </InnerContainer>
    </Container>
  );
};

export default App;
