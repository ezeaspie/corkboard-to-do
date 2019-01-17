import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <li className="task">
        <button
        onClick={()=>{this.props.deleteTask(this.props.name)}}
        >Delete Task</button>
        <button
        onClick={()=>{}}
        >Mark as {this.props.isComplete?"Incomplete":"Complete"}</button>
        <h4>{this.props.isComplete?<s>{this.props.name}</s>:this.props.name}</h4>
      </li>
    );
  }
}

export default Task;
