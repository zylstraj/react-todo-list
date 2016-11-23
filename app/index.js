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

var TodoItem = React.createClass({
  render: function(){
    return(
      <li className="fun">
      <span className="item-name">{this.props.item}</span>
          <button className="item-delete" onClick={this.handleDelete}>Delete</button>
          </li>

      )
  },
  // Custom Functions
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }
})
ReactDOM.render(<TodoComponent />, document.getElementById('todo'));
