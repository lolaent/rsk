import React from "react";

import LooList from "../components/LooList";
import LooForm from "../components/LooForm";
import { useLoos } from "../hooks/loos";

function Home() {
  const [showForm, setShowForm] = React.useState(false);
  const { loos, addLoo, pending } = useLoos();

  React.useEffect(() => {
    if (!pending) {
      setShowForm(false);
    }
  }, [pending]);

  return (
    <>
      <h1>Norwich Loos!</h1>
      <LooList loos={loos} />
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Loo"}
      </button>
      {showForm ? <LooForm onSubmit={addLoo} /> : null}
    </>
  );
}

export default Home;
