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

function Game() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game,
      player: { ...game.player, name: "Bob" },
    });
  };

  return (
    <Box>
      <p>Player Id: {game.id}</p>
      <p>Player Name: {game.player.name}</p>
      <Button onClick={handleClick}>Bob's Turn!</Button>
    </Box>
  );
}

export default Game;
