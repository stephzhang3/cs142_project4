import React from "react";
import Header from "./header/Header";
import States from "./states/States";
import Example from "./example/Example";

// class Test extends React.Component {
//   constructor(props) {
//     super(props);
//
//     console.log(props, this.props);
//   }
//
//   render() {
//     return <div> {JSON.stringify(this.props)}</div>;
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }
//
// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

function Page(props) {
  //console.log(props  /, props.currPage);
  const currentPage = props.currPage;
  if (currentPage === "Example") {
    return <Example />;
  }
  return <States />;
}

function ExampleButton(props) {
  return <button onClick={props.onClick}>Example</button>;
}

function StateButton(props) {
  return <button onClick={props.onClick}>States</button>;
}

class ViewSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.handleExampleClick = this.handleExampleClick.bind(this);
    this.handleStateClick = this.handleStateClick.bind(this);
    this.state = { currentPage: "Example" };
  }

  handleExampleClick() {
    this.setState({ currentPage: "Example" });
  }

  handleStateClick() {
    this.setState({ currentPage: "State" });
  }

  render() {
    const currentPage = this.state.currentPage;
    let button;

    if (currentPage === "Example") {
      button = <StateButton onClick={this.handleStateClick} />;
    } else {
      button = <ExampleButton onClick={this.handleExampleClick} />;
    }

    return (
      <div>
        {button}
        <Page currPage={this.state.currentPage} />
      </div>
    );
  }
}

export default ViewSwitcher;
