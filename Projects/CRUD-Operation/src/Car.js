import React from "react";

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        show:true
    }
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
      favcolor:"green"
    };
  }
  static getDerivedStateFromProps(props,state){
    return {favcolor:props.favcol}
  }
  changeColor =()=>{
    this.setState({color:"Blue"});
    this.setState({favcol:"Black"});
}
componentDidMount(){
    setTimeout(()=>{
        this.setState({color:"Orange"})
    },2000)
}
// componentDidUpdate(){
//      console.warn("The componentDidUpdate is progress");
// }
shouldComponentUpdate(){
    return true;
}
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
            {this.state.model}
           from  {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor} >Change color</button>
        <p>Fav color is : {this.state.favcol}</p>
      </div>
    );
  }
}
