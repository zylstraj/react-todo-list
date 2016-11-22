import React from "react";
import ReactDOM from "react-dom";

var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['study', 'workout', 'meditate', 'sleep']
    }
  },
  render: function(){
      var todos = this.state.todos;
      todos = todos.map(function(item, index){
        return(
          <li key={index} className="fun">{item}</li>
          )
      });
      return(
        <div>
        <h1>Fun Times</h1>
        <ul>{todos}</ul>
        </div>
    )
  }
})

ReactDOM.render(<TodoComponent />, document.getElementById('todo'));
