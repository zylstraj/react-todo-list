import React from "react";
import ReactDOM from "react-dom";

// how I have {TodoItem} written affects createClass when I build with ES5: Just be fucking aware of this discrepancy.

import {TodoItem} from './todoItem';
import {AddItem} from './addItem';
// var TodoItem = require('./todoItem');
// var AddItem = require('./addItem');

class TodoComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      todos: ['study', 'workout', 'meditate', 'sleep']
    };
    // adds functionality: to better understand: here is the link on github: https://github.com/goatslacker/alt/issues/283
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }
  onDelete(item){
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    })
    this.setState({
      todos: updatedTodos
    })
  }
  onAdd(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    })
  }
  render(){
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
  }

}




// var TodoComponent = React.createClass({
//   getInitialState: function() {
//     return {
//       todos: ['study', 'workout', 'meditate', 'sleep']
//     }
//   },
//   render: function(){

//       var todos = this.state.todos;
//       todos = todos.map(function(item, index){
//         return(
//           <TodoItem item = {item} key ={index} onDelete = {this.onDelete}/>
//           )
//       }.bind(this));
//       return(
//         <div id="todo-list">
//         <h1>Fun Times</h1>
//         <ul>{todos}</ul>
//         <AddItem onAdd={this.onAdd} />
//         </div>
//     )
//   },
//   onDelete: function(item){
//     var updatedTodos = this.state.todos.filter(function(val, index){
//       return item !== val;
//     })
//     this.setState({
//       todos: updatedTodos
//     })
//   },
//   onAdd: function(item){
//     var updatedTodos = this.state.todos;
//     updatedTodos.push(item);
//     this.setState({
//       todos: updatedTodos
//     })
//   }
// })

ReactDOM.render(<TodoComponent />, document.getElementById('todo'));
