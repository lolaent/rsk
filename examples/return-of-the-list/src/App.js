import React from "react";
import "./App.css";

import { fetchLoos } from "loo-api";
import LooList from "./components/LooList";
import LooForm from "./components/LooForm";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [loos, setLoos] = React.useState([]);
  React.useEffect(() => {
    fetchLoos().then(setLoos);
  }, []);

  return (
    <>
      <h1>Norwich Loos</h1>
      <LooList loos={loos} />
      <button onClick={() => setIsOpen(!isOpen)}>Add Loo</button>
      {isOpen && <LooForm />}
    </>
  );
}

export default App;
