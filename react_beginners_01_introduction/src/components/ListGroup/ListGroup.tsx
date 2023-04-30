/* import { MouseEvent } from "react"; 
^^ This would be used for the onClick event before we changed */

import { useState } from "react";
// import styles from "./ListGroup.module.css";
// used with <ul className={[styles.listGroup, styles.container].join(" ")}>
// Using the following instead to work with Library: Styled Components
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background-color: ${(props) => (props.active ? "cyan" : "none")};
`;

// List Group Properties: items array and a heading

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

/* parameter is props of type Props as defined above 
   destructuring the props to the individual properties
   to make conde less clunky later */
function ListGroup({ items, heading, onSelectItem }: Props) {
  /* Creating dynamic list items, let instead of const because the array
     could change 
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"]; */

  /* Creating a variable to keep track of the selected item, -1 is the default
     which means nothing is selected, 0 would mean first item, etc.
  let selectedIndex = 0;

  Hook: Function that allows us to tap into built-in React features
      - useState is a hook that allows us to create a state variable that
          can change state over time. */
  const [selectedIndex, setSelectedIndex] = useState(0); // -1 is the default value
  // returned arr[0] variable (selectedIndex)
  // returned arr[1] updater function (setSelectedIndex)

  /* Event Handler
    type annotation: telling typescript what type of data the variable is 
    const handleClick = (event: MouseEvent) => console.log(event);

  /* Ways to conditionally render JSX markup
  
  - Constant Option:
    const Message =  items.length === 0 ?
      <p>This is not much of a list, now is it?</p> : null;

  - Ternary condition function option: 
  const getMessage = () => {
    return items.length === 0 ? (
      <p>This is not much of a list, now is it?</p>
    ) : null;
  }; */

  return (
    /* list copied and pasted from bootstrap docs, changed class to className
    - cmd + d to select next instance of word and change all at once
    - view - command palette - format document - select prettier
    - <> is a React fragment, it's a way to group elements without adding 
        extra nodes to the DOM 
    - map is mapping each of the array items to a list item
    - key is a special attribute that must be added to list items to give
        each item a unique identifier so react can keep track of them
        when they changed dynamically
    - usually this identifier is a unique id from the database or API
    - the conditional below if there are no items in the list, it will
        render the message
        - if the result of the condition is true, the message will be
            rendered
        - if the result of the condition is false, null will be rendered
        - this is a cleaner way to conditionally render JSX markup
    - the map function and condition below must be wrapped in braces 
        in order to be rendered dynamically in the middle of JSX markup
    - JSX only allows HTML or react components */

    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>This is not much of a list, now is it?</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            // dynamically styling using styled components
            active={index === selectedIndex}
            /* rendering the active class dynamically: if the index of the
               selected item is equal to the index of the current item,
                then the active class will be rendered, otherwise the
                default class will be rendered */
            // className={
            //   selectedIndex === index
            //     ? "list-group-item active"
            //     : "list-group-item"
            // }
            key={item}
            /* This would log the name, index, and type of event of an item 
            when clicked on.
            onClick={(event) => console.log(item, index, event)} */

            /* This refers to the event handler above
            onClick={handleClick} 
            
            Fancier onClick function: using the useState from above 
            which takes the index of the current list item.
            Now, the list item that is clicked on is the highlighted item. 
            
            Keep in mind that each instance of ListGroup would have its own state. */
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
