import React, { Component } from 'react';
import Task from './Task';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentTaskInput: "",
            isEditing:false,
        }
    }

    handleInputChange(e){
        e.preventDefault();
        this.setState({currentTaskInput:e.target.value});
    }

    deleteTask = (taskName) => {
        let taskList = this.props.tasks;
        taskList.splice(taskList.findIndex(element=>element.name === taskName),1);

        this.props.updateProjectList(this.props.name,{name:this.props.name, tasks:taskList})
    }

    createNewProjectTask = () => {
        this.setState({currentTaskInput:""})
        let taskFactory = (name) =>{
            return {name, isComplete:false}
        }
        let taskList = this.props.tasks;

        taskList.push(taskFactory(this.state.currentTaskInput));
        
        this.props.updateProjectList(this.props.name,{name:this.props.name, tasks:taskList})
        //Add this task to the current project and then update the overall list with new project.
    }

  render() {
    return (
    <div className="project">
        <h3>{this.props.name}</h3>
        <div className="project-main">
            <button 
            className="delete"
            onClick={()=>{this.props.deleteProject(this.props.name)}}
            >Delete this Project</button>
            <div className="add-new-task">
                <input 
                type="text"
                value={this.state.currentTaskInput}
                onChange={(e)=>this.handleInputChange(e)}
                ></input>
                <button onClick={this.createNewProjectTask}>Add Task</button>
            </div>
            <ul>
            {
                this.props.tasks.map((task, i)=>{
                return(
                    <Task 
                    deleteTask={this.deleteTask}
                    key={this.props.id + i + task.name}
                    name={task.name}
                    isComplete={task.isComplete}
                    />
                )
                })
            }
            </ul>
        </div>
    </div>
    );
  }
}

export default Project;
