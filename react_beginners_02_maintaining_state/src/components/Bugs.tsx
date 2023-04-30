import React, { useState } from "react";
import styled from "styled-components";

const BugsCSS = styled.div`
  padding: 5px 10px;
  margin: 10px 15px;
`;

const BugsLine = styled.div`
  margin: 1px;
  color: white;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin: 5px 10px;
  border-radius: 5px;
`;

const Box = styled.div`
  margin: 10px 10px;
  background-color: #333333;
  padding: 10px 10px;
  border-radius: 10px;
  align-items: center;
`;

function Bugs() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", status: "not fixed" },
    { id: 2, title: "Bug 2", status: "not fixed" },
    { id: 3, title: "Bug 3", status: "not fixed" },
  ]);

  const fixBug1 = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, status: "fixed" } : bug))
    );
  };

  const fixBug2 = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 2 ? { ...bug, status: "fixed" } : bug))
    );
  };

  const fixBug3 = () => {
    setBugs(
      bugs.map((bug) => (bug.id === 3 ? { ...bug, status: "fixed" } : bug))
    );
  };

  return (
    <Box>
      <Box>
        {bugs.map((bug) => (
          <BugsLine>
            ID: {bug.id} | Description: {bug.title} | status: {bug.status}
          </BugsLine>
        ))}
      </Box>
      <Box>
        <Button onClick={fixBug1}>Fix Bug 1</Button>
        <Button onClick={fixBug2}>Fix Bug 2</Button>
        <Button onClick={fixBug3}>Fix Bug 3</Button>
      </Box>
    </Box>
  );
}

export default Bugs;
