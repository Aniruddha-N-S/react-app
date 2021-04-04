import React from 'react';
import styled from 'styled-components';
import List from './components/list';
import Input from './components/input';

const tasks = [
  // { name: ' ', isComplete: false },
  // { name: 'task2', isComplete: true },
  // { name: 'task3', isComplete: false },
]
const GridWrapper = styled.div`
  
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;

`;
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks,
    }
  }

  render() {
    return (
      <GridWrapper>
        <h1>To Do Lists</h1>
        <Input
          createTask={this.createTask.bind(this)}
          taskList={this.state.tasks}
        />
        <List
          editMode={this.state.isEditing}
          taskList={this.state.tasks}
          deleteTask={this.deleteTask}
          saveTask={this.saveTask}
          toggleTask={this.toggleTask}
        />
      </GridWrapper>
    )
  }

  createTask = (task, errorMsg) => {
    this.setState((prevState) => {
      prevState.tasks.push({ name: task, isComplete: false });
      return {
        tasks: prevState.tasks
      }
    })
  }

  deleteTask = (taskToDelete) => {
    this.setState(prevState => {
      const tasks = prevState.tasks.filter(task => task.name !== taskToDelete);
      return { tasks };
    });
  }

  saveTask = (oldTask, newTask) => {
    // console.log('saving task: ' + oldTask + " => " + newTask);

    const foundTask = tasks.find(task => task.name === oldTask)

    foundTask.name = newTask;
    this.setState({ tasks: this.state.tasks });
  }

  toggleTask = (taskToToggle) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map(task =>
        task.name === taskToToggle.name ? { ...task, isComplete: !task.isComplete } : task)
    }))
  }


}
export default Home;