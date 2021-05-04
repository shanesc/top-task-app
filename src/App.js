import { Component } from 'react';
import Overview from './components/Overview';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      input: '',
    };
  }

  addTask = (event) => {
    event.preventDefault();
    const task = {
      id: uuidv4(),
      text: this.state.input,
      number: this.state.tasks.length + 1,
    };
    this.setState({
      tasks: this.state.tasks.concat(task),
      input: '',
    });
  };

  deleteTask = (id) => {
    let count = 1;
    // take the list of tasks from state
    const updatedTasks = this.state.tasks.reduce((tasks, task) => {
      // filter out any tasks that dont match the id
      if (task.id !== id) {
        tasks = tasks.concat({
          id: task.id,
          text: task.text,
          // update the task number at this point
          number: count++,
        });
      }
      return tasks;
    }, []);
    // set that filtered array to the new task list
    this.setState({
      tasks: updatedTasks,
    });
  };

  inputHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    const { input, tasks } = this.state;
    return (
      <div>
        <form onSubmit={this.addTask}>
          <label>
            Task
            <input type='text' value={input} onChange={this.inputHandler} />
          </label>
          <button type='submit'>Add Task</button>
        </form>
        <span>Total tasks: {tasks.length}</span>
        <Overview tasks={tasks} onDelete={this.deleteTask} />
      </div>
    );
  }
}

export default App;
