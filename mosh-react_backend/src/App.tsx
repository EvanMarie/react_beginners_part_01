import React, { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";
import ChatServer from "./components/ChatServer";
import FetchingData from "./components/FetchingData";
import FetchingDataServices from "./components/FetchingDataServices";
import CH_FetchingDataServices from "./components/CH_FetchingDataServices";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState("");

  // after render
  useEffect(() => {
    // side-effect
    if (ref.current) ref.current.focus();
  });

  // Changes the title of the page
  useEffect(() => {
    document.title = "My App";
  });

  return (
    <div>
      <div>
        <input ref={ref} type="text" className="form-control" />
      </div>
      <br />
      <div>
        <select
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
          <option value="Pets">Pets</option>
        </select>
      </div>
      <br />
      <div>
        <ProductList category={category} />
      </div>
      <hr />
      <br />
      <div>
        <ChatServer />
      </div>
      <br />
      <div>
        <h1>FetchingData.tsx</h1>
        <FetchingData />
      </div>
      <hr />
      <br />
      <h1>FetchingDataServices.tsx</h1>
      <div>
        <FetchingDataServices />
      </div>
      <hr />
      <br />
      <div>
        <h1>CH_FetchingDataServices.tsx</h1>
        <CH_FetchingDataServices />
      </div>
    </div>
  );
};

export default App;
