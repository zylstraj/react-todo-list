import React from "react";
import ReactDOM from "react-dom";

var TodoItem = require('./todoItem');

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
          <TodoItem item = {item} key ={index} onDelete = {this.onDelete}/>
          )
      }.bind(this));
      return(
        <div id="todo-list">
        <h1>Fun Times</h1>
        <ul>{todos}</ul>
        </div>
    )
  },
  onDelete: function(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    })
    this.setState({
      todos: updatedTodos
    })
  }
})

ReactDOM.render(<TodoComponent />, document.getElementById('todo'));
