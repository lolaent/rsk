import React from "react";

import { Loo, LooDetails, fetchLoos, addLoo } from "loo-api";
import LooList from "../components/LooList";
import LooForm from "../components/LooForm";

function Home() {
  const [showForm, setShowForm] = React.useState(false);
  const [loos, setLoos] = React.useState<Loo[]>([]);
  const [pendingLoo, setPendingLoo] = React.useState<LooDetails>();

  React.useEffect(() => {
    fetchLoos().then(setLoos);
  }, []);

  React.useEffect(() => {
    if (pendingLoo) {
      addLoo(pendingLoo).then((loo) => {
        setPendingLoo(undefined);
        setShowForm(false);
        setLoos((ls) => [...ls, loo]); //"functional update"
      });
    }
  }, [pendingLoo]);

  return (
    <>
      <h1>Norwich Loos!</h1>
      <LooList loos={loos} />
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add Loo"}
      </button>
      {showForm ? <LooForm onSubmit={setPendingLoo} /> : null}
    </>
  );
}

export default Home;
