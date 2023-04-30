import React, { useState } from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

const LikeButtonStyle = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px 10px;
`;

interface LikeButtonProps {
  onClick: () => void;
  liked: boolean;
}

const LikeButton = ({ onClick, liked }: LikeButtonProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  return (
    <LikeButtonStyle
      className={`like-button ${isLiked ? "liked" : ""}`}
      onClick={handleClick}
    >
      <FaHeart color={isLiked ? "cyan" : "grey"} size="23" />
    </LikeButtonStyle>
  );
};

export default LikeButton;

/* 
    - We imported the necessary dependencies: React, styled-components, and 
    react-icons/fa (which provides the FaHeart icon).
    - We defined a styled component called LikeButtonStyle using styled.div. 
    - This component sets the display, cursor, margin, and padding CSS properties 
    for the button.
    - We defined an interface called LikeButtonProps that specifies the onClick 
    function and a boolean liked prop for the LikeButton component.
    - We defined the LikeButton component, which takes onClick and liked props 
    as parameters.
    - We used the useState hook to declare a state variable called isLiked, 
    which is initially false.
    - We defined a handleClick function that toggles the isLiked state variable 
    using the setIsLiked function and then calls the onClick prop function.
        - When the function is called (presumably when the user clicks on the 
            LikeButton component), it calls setIsLiked with the opposite value 
            of the isLiked state variable. This toggles the state variable between 
            true and false.
        - The function then calls the onClick function that was passed to the 
        LikeButton component as a prop. This is presumably a function defined 
        in the parent component that does something related to the "like" action, 
        such as incrementing a counter or sending a network request.
        - Overall, the handleClick function updates the state of the LikeButton 
        component and then calls a function that was passed to it as a prop to 
        trigger some other action in the parent component.
    - In the return statement, we rendered the LikeButtonStyle component with a 
    className that includes the string like-button and liked if isLiked is true. 
    - We also passed the handleClick function to the onClick prop of the 
    - LikeButtonStyle component, and rendered the FaHeart component with a color 
    of cyan if isLiked is true and grey otherwise.
    - Finally, we exported the LikeButton component as the default export.

This code creates a button with a heart icon that toggles its color when clicked, 
and calls a specified function (onClick) when clicked.

*/
