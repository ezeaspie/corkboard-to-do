import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <li className="task">
        <div className="button-container">
          <button
          onClick={()=>{this.props.deleteTask(this.props.name)}}
          ><img alt="delete" src="./images/delete.png"/></button>
          <button
          onClick={()=>{this.props.toggleCompleteTask(this.props.isComplete,this.props.name)}}
          >
          <img alt="incomplete"
          className={!this.props.isComplete?"visible-icon":"hidden-icon"} 
          src="./images/unchecked.png" />
          <img alt="complete" 
          className={!this.props.isComplete?"hidden-icon":"visible-icon"} 
          src="./images/checked.png"/>
          </button>
        </div>
        <h4>{this.props.isComplete?<s>{this.props.name}</s>:this.props.name}</h4>
      </li>
    );
  }
}

export default Task;
