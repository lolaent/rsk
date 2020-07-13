import React from "react";

import { Loo, fetchLoos } from "loo-api";
import LooList from "../components/LooList";
import LooForm from "../components/LooForm";

function Home() {
  const [showForm, setShowForm] = React.useState(false);
  const [loos, setLoos] = React.useState<Loo[]>([]);

  React.useEffect(() => {
    fetchLoos().then(setLoos);
  }, []);

  return (
    <>
      <h1>Norwich Loos</h1>
      <LooList loos={loos} />
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Loo"}
      </button>
      {showForm ? <LooForm /> : null}
    </>
  );
}

export default Home;
