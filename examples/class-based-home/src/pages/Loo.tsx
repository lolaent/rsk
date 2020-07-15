import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LooDetails, fetchLoo } from "loo-api";

export default function LooPage() {
  const { id } = useParams();
  const [loo, setLoo] = React.useState<LooDetails | undefined>(undefined);

  useEffect(() => {
    fetchLoo(id).then(setLoo);
  }, [id]);

  if (!loo) {
    return <h2>Hang on a sec...</h2>;
  }

  return <h1>{loo.name}</h1>;
}
