// ClassComponent used only for 10% as compared to functional component
import react, { Component } from "react";
export default class ClassComponent extends Component {
  render() {
    // render is additional thing in class component
    return (
      <div>
        <h1>This is class Component</h1>
      </div>
    );
  }
}
