import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;

/*     
- We import the useState hook from the react library and two react-icons named 
AiFillHeart and AiOutlineHeart.
- We define an interface called Props that includes a single property called 
onClick. The onClick property is a function that takes no arguments and 
returns no values.
- We define a functional component called Like that takes a single prop of 
type Props. This component returns an AiFillHeart icon if the status state 
variable is true, and an AiOutlineHeart icon if the status state variable 
is false.
- We define a toggle function that toggles the status state variable between 
true and false and then calls the onClick function that was passed to the 
component as a prop.
- We render either the AiFillHeart or AiOutlineHeart icon depending on the 
value of the status state variable.
- If the status state variable is true, we pass the color, size, and onClick 
props to the AiFillHeart icon.
- If the status state variable is false, we pass the size and onClick props 
to the AiOutlineHeart icon.
- Finally, we export the Like component as the default export.

- Overall, this component uses state and props to render either a filled 
heart or an outlined heart icon, depending on the current status of the 
component. When the icon is clicked, it toggles the status and calls a 
function that was passed to the component as a prop. */
