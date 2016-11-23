import React from "react";
import ReactDOM from "react-dom";

var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

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
        <AddItem onAdd={this.onAdd} />
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
  },
  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }
})

ReactDOM.render(<TodoComponent />, document.getElementById('todo'));
