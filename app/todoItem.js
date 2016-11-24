import React from "react"

// really good fucking resource here looking at the difference and an error I ran into here
//https://codereviewvideos.com/blog/warning-react-createelement/

// es6 : Trying to get it to work
export class TodoItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  // Custom Functions
  handleDelete() {
    this.props.onDelete(this.props.item);
  }
  render() {
    return(
      <li className="fun">
      <span className="item-name">{this.props.item}</span>
          <button className="item-delete" onClick={this.handleDelete}>Delete</button>
          </li>

      )
  }

}
// var TodoItem = React.createClass({
//   render: function(){
//     return(
//       <li className="fun">
//       <span className="item-name">{this.props.item}</span>
//           <button className="item-delete" onClick={this.handleDelete}>Delete</button>
//           </li>

//       )
//   },
//   // Custom Functions
//   handleDelete: function(){
//     this.props.onDelete(this.props.item);
//   }
// })

// module.exports = TodoItem;
