import React from "react";
import { Link } from "react-router-dom";
import { Loo } from "loo-api";

interface LooListProps {
  loos: Loo[];
}

const LooList = ({ loos }: LooListProps) => {
  return (
    <ul>
      {loos.map((loo) => (
        <li key={loo.id}>
          <Link to={`/loos/${loo.id}`}>Name: {loo.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LooList;
