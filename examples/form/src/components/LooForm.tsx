import React from "react";
import { LooDetails } from "loo-api";

interface LooFormProps {
  onSubmit: (loo: LooDetails) => void;
}

export default function LooForm({ onSubmit }: LooFormProps) {
  const [name, setName] = React.useState("Eeyore");

  function save(event: React.MouseEvent) {
    event.preventDefault();
    //Gather our LooDetails and forward them to the onSubmit prop
  }

  return (
    <form>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Save" onClick={save} />
    </form>
  );
}
