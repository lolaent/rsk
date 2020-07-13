import React, { Suspense } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

const LooPage = React.lazy(() =>
  import(/*webpackChunkName: 'looPage'*/ "./pages/Loo")
);

const Loader = () => <h1>Loading...</h1>;

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/loos/:id">
            <LooPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
