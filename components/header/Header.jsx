import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="headerText">
          <h1 className="headerTitle">Steph Zhang</h1>
          <p className="affiliation">Learning Design and Technology (LDT)</p>
          <p className="affiliation">Stanford University</p>
          <p className="affiliation">CS142: Project 4</p>
        </div>
        <div className="headerDesign">
          <div className="square1" />
          <div className="square2" />
        </div>
      </div>
    );
  }
}

export default Header;
