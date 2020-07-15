import { useState, useEffect } from "react";

import { Loo, LooDetails, fetchLoos, fetchLoo, addLoo } from "loo-api";

export function useLoos() {
  const [loos, setLoos] = useState<Loo[]>([]);
  const [pending, setPending] = useState<LooDetails | null>();

  useEffect(() => {
    fetchLoos().then(setLoos);
  }, []);

  useEffect(() => {
    if (pending) {
      addLoo(pending).then((loo) => {
        setPending(null);
        setLoos((ls) => [...ls, loo]); //"functional update"
      });
    }
  }, [pending]);

  return {
    loos: loos,
    addLoo: (loo: LooDetails) => setPending(loo),
    pending: pending,
  };
}

export function useLoo(id: string) {
  const [loo, setLoo] = useState<LooDetails | undefined>(undefined);
  useEffect(() => {
    fetchLoo(id).then(setLoo);
  }, [id]);

  return loo;
}
