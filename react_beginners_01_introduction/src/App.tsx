// import from Message.tsx, ./ means current directory
// For demonstration
// import Message from './Message';

import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";
import LikeButton from "./components/Like";
import Like from "./components/MoshLikeButton";

// importing icons from react-icons, code just like a component
import { FaConnectdevelop } from "react-icons/fa";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let others = ["Evan", "Puppy", "Michael", "Emma", "Ragnarok", "Thor"];
  // self-closing syntax: <Message />
  // return <div><Message /></div>

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  /* Like Button Settings - must create the variables to work with here in App
      and pass them down to the component
  */
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <FaConnectdevelop color="deeppink" size="23" />

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      <ListGroup
        items={others}
        heading="Family"
        onSelectItem={handleSelectItem}
      />
      <Alert onClose={() => setAlertVisibility(false)}>
        <span>This is some text.</span>
      </Alert>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        Mighty Fine Button
      </Button>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Another Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Another One
      </Button>

      <div>
        <LikeButton onClick={handleLikeClick} liked={isLiked} />
      </div>

      <div>
        <Like onClick={() => console.log("Clicked")} />
      </div>
    </div>
  );
}

export default App;

/* LIKE BUTTON:
    - We imported the LikeButton component using the following line: import 
    LikeButton from "./components/Like";
    - We defined two state variables for the LikeButton component: isLiked, 
    which is a boolean that indicates whether the button is currently liked,
    and setIsLiked, which is a function that toggles the isLiked state variable.
    - We defined a function called handleLikeClick that uses the setIsLiked 
    function to toggle the isLiked state variable when the button is clicked.
    - We rendered the LikeButton component by including the following JSX: 
    <LikeButton onClick={handleLikeClick} liked={isLiked} />. We passed the 
    handleLikeClick function to the onClick prop and the isLiked state variable 
    to the liked prop.

- Overall, we added the LikeButton component to the App component and passed 
it the necessary props to make it work.
*/
