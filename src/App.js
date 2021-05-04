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
    };
    this.setState({
      tasks: this.state.tasks.concat(task),
      input: '',
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
        <Overview taskList={tasks} />
      </div>
    );
  }
}

export default App;
