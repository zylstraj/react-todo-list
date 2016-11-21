import React from "react";
import ReactDOM from "react-dom";

var TodoComponent = React.createClass({
  render: function(){
      return(
    <h1>Fun Times</h1>
    )
  }
})

ReactDOM.render(<TodoComponent />, document.getElementById('todo'));
