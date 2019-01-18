import React, { Component } from 'react';
import Navigation from './Navigation';
import Project from './Project';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentProjectInput:"",
      projectList: [
        {
          name:"Build CorkBoard",
          tasks:[
            {
              name:"Make UI Great!",
              isComplete:false,
            },
            {
              name:"Finish by Friday?",
              isComplete:false,
            },
            {
              name:"Place dummy data",
              isComplete:true,
            }
          ]
        }
      ],
    }

    this.deleteProject = this.deleteProject.bind(this);
    this.updateProjectList = this.updateProjectList.bind(this);
  }

  handleNewProject(e){
    e.preventDefault();
    let projectList = this.state.projectList;
    let newProjectFactory = (name) => {
      return {name,tasks:[]}
    }

    let newProject = newProjectFactory(this.state.currentProjectInput);

    projectList.unshift(newProject);

    this.setState({projectList, currentProjectInput:""});
  }

  handleInputChange(e){
    e.preventDefault();
    this.setState({currentProjectInput:e.target.value});
  }

  deleteProject(projectName){
    let projectList = this.state.projectList;
    
    projectList.splice(projectList.findIndex(element=>element.name === projectName),1);

    this.setState({projectList});
  }

  updateProjectList(projectName, updatedProject){
    let projectList = this.state.projectList;
    let index = projectList.findIndex(element=>element.name === projectName);

    projectList[index] = updatedProject;

    this.setState({projectList})


  }


  render() {
    return (
      <div className="App">
        <Navigation />
        <form onSubmit={(e)=>{this.handleNewProject(e)}}>
          <input 
          type="text" 
          name="project-name" 
          value={this.state.currentProjectInput}
          onChange={(e)=>{this.handleInputChange(e)}}
          ></input>
          <input 
          type="submit"
          className="add-project"
          value="Create new project"
          />
        </form>
        <div className="project-list">
          {
            this.state.projectList.length === 0?
            <div>
              <img src="./images/logo.png" alt="logo"></img>
              <h4>There seems to be nothing here... :(</h4>
              <h5>Try adding a new project to populate your CorkBoard!</h5>
            </div>
            :
              this.state.projectList.map((project,i)=>{
                return (
                  <Project 
                    key={"project"+i}
                    id={i}
                    name={project.name}
                    tasks={project.tasks}
                    deleteProject={this.deleteProject}
                    updateProjectList={this.updateProjectList}
                  />
                )
              })
          }
        </div>
      </div>
    );
  }
}

export default App;
