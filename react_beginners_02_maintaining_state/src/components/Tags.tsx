import React, { useState } from "react";
import styled from "styled-components";

const TagsCSS = styled.div`
  display: flex;
  background-color: #333333;
  padding: 10px 15px;
  border-radius: 10px;
  height: 75px;
  align-items: center;
  color: cyan;
  font-family: monospace;
  flex-direction: column;
  align-items: left;
  margin: 10px;
`;

const TagsLine = styled.p`
  margin: 1px;
  font-size: 16px;
`;

function Tags() {
  // We will add 'exciting' to this array with the click of a button
  const [tags, setTags] = useState(["happy", "cheerful", "joyous"]);

  const addExciting = () => {
    // not using .push, because we don't want to mutate the array
    setTags([...tags, "exciting"]);
  };

  const removeCheerful = () => {
    // now we will remove 'happy' from the array
    setTags(tags.filter((tag) => tag !== "cheerful"));
  };

  const changeHappy = () => {
    /* updating an object: iterate over items, if item is 'happy', 
    change it to 'so happy', otherwise keep it the same */
    setTags(tags.map((tag) => (tag === "happy" ? "so happy" : tag)));
  };

  return (
    <div>
      <TagsCSS>
        {tags.map((tag) => (
          <TagsLine>{tag}</TagsLine>
        ))}
      </TagsCSS>
      <button onClick={addExciting}>Add Exciting</button>
      <button onClick={removeCheerful}>Remove Cheerful</button>
      <button onClick={changeHappy}>Change Happy</button>
    </div>
  );
}

export default Tags;
