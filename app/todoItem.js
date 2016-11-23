import React from "react"

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

module.exports = TodoItem;
