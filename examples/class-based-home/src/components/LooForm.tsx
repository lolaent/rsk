import React from "react";
import { LooDetails } from "loo-api";

interface SubmitHandler {
  (loo: LooDetails): void;
}

interface LooFormProps {
  onSubmit: SubmitHandler;
}

export default function LooForm({ onSubmit }: LooFormProps) {
  function save(event: React.MouseEvent) {
    event.preventDefault();
    //Gather our LooDetails and forward them to the onSubmit prop
  }

  return (
    <form>
      <input type="submit" value="Save" onClick={save} />
    </form>
  );
}
