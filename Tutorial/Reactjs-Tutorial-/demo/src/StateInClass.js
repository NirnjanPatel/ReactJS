import React from "react";
// import React,{Component} from "react";
// class state extends Component
class StateInClass extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "Neer",
      name: "Neer",
      lastName: "M",
    };
  }
  apple() {
    this.setState = { data: "Harry" };
  }
  render() {
    return (
      <div>
        <h1>State in Class Component </h1>
        <h2>{this.state.data}</h2>
        {/* <button onClick={this.Apple}>Update Data</button> */}
        <button onClick={() => this.apple()}>Update Data</button>
        {/*Using arrow function because when we click on a button than our function will be called 
            if we use normal func than it will be called automatically*/}
        <h2>{this.state.data}</h2>
      </div>
    );
  }
}
export default StateInClass;
