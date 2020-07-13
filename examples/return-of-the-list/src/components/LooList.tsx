import React from "react";
import { Loo } from "loo-api";

interface LooListProps {
  loos: Loo[];
}

const LooList = ({ loos }: LooListProps) => {
  return (
    <ul>
      {loos.map((loo) => (
        <li key={loo.id}>{loo.name}</li>
      ))}
    </ul>
  );
};

export default LooList;
