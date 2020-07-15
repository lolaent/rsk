import React from "react";

import { Loo, fetchLoos } from "loo-api";
import LooList from "../components/LooList";
import LooForm from "../components/LooForm";

interface HomeState {
  showForm: boolean;
  loos: Loo[];
}

class Home extends React.Component {
  state: HomeState = {
    showForm: false,
    loos: [],
  };

  constructor(props) {
    super(props);
  }

  changeShowForm = (val: boolean) => {
    this.setState({
      showForm: val,
    });
  };

  changeLoos = (loos: Loo[]) => {
    this.setState({
      loos,
    });
  };

  async componentDidMount() {
    let loos = await fetchLoos();
    this.changeLoos(loos);
  }

  render() {
    return (
      <>
        <h1>Norwich Loos</h1>
        <LooList loos={this.state.loos} />
        <button onClick={() => this.changeShowForm(!this.state.showForm)}>
          {this.state.showForm ? "Cancel" : "Add Loo"}
        </button>
        {this.state.showForm ? (
          <LooForm onSubmit={(data) => console.log(data)} />
        ) : null}
      </>
    );
  }
}

export default Home;
