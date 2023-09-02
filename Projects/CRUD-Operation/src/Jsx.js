import React from "react";
class Jsx extends React.Component {
  render() {
 var myStyle={
    fontSize:80,
    fontFamily:'Courier',
    color:'red'
 }

var i =5;
    return (
      <div>
        <h1 style={myStyle}>myStyle is using</h1>
          <h1 className="Hello">tarun</h1>
          <h2 style={myStyle}>{23+23}</h2>
          <p data-demoAttribute ="demo">This is name</p>
          <h1>{i==1?'true':'false'}</h1>
      </div>
    );
  }
}
export default Jsx;
