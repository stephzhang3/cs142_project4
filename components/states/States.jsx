import React from "react";
import "./States.css";

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    console.log(
      "window.cs142models.statesModel()",
      window.cs142models.statesModel()
    );

    this.state = {
      statesArray: window.cs142models.statesModel(),
      filterBy: "",
      found: false
    };
    this.handleChangeBound = event => this.handleChange(event);
  }
  handleChange(event) {
    this.setState({ filterBy: event.target.value });
  }

  render() {
    let found;
    for (let i = 0; i < this.state.statesArray.length; i++) {
      if (
        this.state.statesArray[i]
          .toUpperCase()
          .includes(this.state.filterBy.toUpperCase())
      ) {
        found = true;
        break;
      } else {
        found = false;
      }
    }

    return (
      <div>
        <span> Search states by:</span>
        <input
          id="inId"
          type="text"
          value={this.state.filterBy}
          onChange={this.handleChangeBound}
        />
        <ul> {this.state.filterBy} </ul>
        <div>
          {this.state.statesArray.map(currState => {
            return (
              currState
                .toUpperCase()
                .includes(this.state.filterBy.toUpperCase()) && (
                <ul key={currState}> {currState} </ul>
              )
            );
          })}
          {!found && <ul> No states found </ul>}
        </div>
      </div>
    );
  }
}

export default States;
