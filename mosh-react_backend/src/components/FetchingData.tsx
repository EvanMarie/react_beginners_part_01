import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";

/* Dummy JSON data: https://jsonplaceholder.typicode.com/
- axios.get() returns a promise
- .then() takes the response from the promise
- the response object returns not only the data, but other information 
about the data */

/* only specifying the properties of users returned that we will use
    - then we specify in axios.get the type of data we want to get back,
      which will be formated using this interface: <User[]> (below) 
    - empty array for the dependencies of the effect prevents constant render */
interface User {
  id: number;
  name: string;
}

function FetchingData() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // standard in browsers to allow for canceling requests
    const controller = new AbortController();

    // just before calling server, set isLoading to true
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        //hide loader when promise is settled, either resolved or rejected
        setIsLoading(false);
      })

      /* catch used in this way will console log errors that arise,
         ex: if the URL above is wrong or something goes wrong in transmission
         - it will return an Axios error object with information */
      .catch((error) => {
        // avoids unnecessary error cancel clutter on page
        if (error instanceof CanceledError) return;
        setError(error.message);
        // if something goes wrong and promise is rejected, hide loader
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    // Optimistic update, calling the UI first and then the server to persist changes
    // Updating by filtering users and getting all users that are not the deleted id
    setUsers(users.filter((u) => u.id !== user.id));

    // Updating server to persist changes, which returns a promise
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((error) => {
        // if there is an error, set the users back to the original users
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    // IRL, these would be based on values from a form.
    // In this case, values are hard-coded for the purpose of the lesson focus
    const newUser = { id: 0, name: "Evan Marie" };
    setUsers([newUser, ...users]);
    // call server to set changes
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      /* if the call to the server is successful, refresh list with saved newUser
      - the newUser will have an id generated on the server 
      - getting the data from the server and setting users to include the newUser 
      data, which is included in the body of the response 
      - could be written like this as well, whichever is more clear
      .then((response) => setUsers([response.data, ...users])) */
      .then(({ data: savedUser }) => [savedUser, ...users])
      // if an error occurs, return users to originalUsers
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    // for now, update will just add an exclamation point to the end of the username
    const updatedUser = { ...user, name: user.name + " - updated" };
    /* if the id of the current user (u) matches the id of the user passed, return
       the updated user, otherwise return the same user object */
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    /* Updating on the server :
    .put is used for replacing an object. .patch is used for updating one or more 
    properties of an object. The choice depends on how the backend is built. */
    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsers);
      });
  };

  /* the following renders the error message if there is an error present
     spinner is rendered if isLoading is true (use Throttling in network tools to sim)
     using Bootstrap ul and li elements
     - d-flex with justify-content-between spreads the two buttons evenly in their div
     - usernames are pushed left, and buttons container is pushed right
     - mx-1 gives a small horizontal margin between the two buttons
     - updateUser would generally be created from an input form, but here we are 
     simulating that with the button and hard-coded data. */
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchingData;

/* DETAILED EXPLANATION: 
- The component is mounted, and the useState hook is used to initialize the 
users, error, and isLoading state variables.
- The useEffect hook is used to define an effect that runs when the component 
is first mounted and every time users, error, or isLoading changes.
- The effect creates a new AbortController object, which will allow for canceling 
requests if necessary.
- The effect sets isLoading to true.
- The effect makes an HTTP GET request using Axios to retrieve an array of User 
objects from the JSONPlaceholder API.
- The get method of Axios is called with two arguments: the URL to the JSONPlaceholder 
API and an options object that includes the signal property set to the signal property 
of the AbortController object. This ensures that the request can be canceled if needed.
- The Axios get method returns a Promise that resolves with the response data, which 
is an array of User objects.
- If the request is successful, the effect sets users to the response data and sets 
isLoading to false.
- If there is an error, the effect sets the error state to the error message and 
sets isLoading to false.
- The effect returns a cleanup function that calls the abort method of the 
AbortController object to cancel any ongoing requests if the component is unmounted 
before the request completes.
- The component defines three functions: deleteUser, addUser, and updateUser.
deleteUser takes a User object as an argument and creates a copy of the users array 
using the spread operator.
- It removes the passed user from the copied array using the filter method.
- It sets the users state to the new array.
- It makes an HTTP DELETE request to remove the user from the server using Axios. 
The URL for the request includes the id of the user to be deleted.
- If there is an error, the function sets the error state to the error message and 
sets the users state back to the original array.
addUser creates a copy of the users array using the spread operator.
- It creates a new User object with a hard-coded id and name.
- It adds the new user to the beginning of the copied array using the spread operator.
- It sets the users state to the new array.
- It makes an HTTP POST request to add the new user to the server using Axios. The 
body of the request includes the data for the new user.
- If there is an error, the function sets the error state to the error message and 
sets the users state back to the original array.
updateUser takes a User object as an argument and creates a copy of the users array 
using the spread operator.
- It creates a new User object with an updated name property.
- It replaces the passed user with the updated user using the map method.
- It sets the users state to the new array.
- It makes an HTTP PATCH request to update the user on the server using Axios. The 
URL for the request includes the id of the user to be updated, and the body of the 
request includes the data for the updated user.
- If there is an error, the function sets the error state to the error message and 
sets the users state back to the original array.
- The component's return statement returns a fragment containing:
  - A conditional rendering of the error message using the && operator.
  - A conditional rendering of a Bootstrap spinner using the && operator.
  - A button that calls addUser when clicked.
  - A list of User objects, where each User object is displayed in a Bootstrap 
  list-group-item element.
  - For each User object, an "Update" button and a "Delete" button are displayed using 
  Bootstrap btn elements.
  - The "Update" button calls updateUser with the corresponding User object as an 
  argument.
  - The "Delete" button calls deleteUser with the corresponding User object as an 
  argument.


*/
