import { Component } from 'react';
import Overview from './components/Overview';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: {
        list: [],
        count: 0,
      },
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
      tasks: {
        list: this.state.tasks.list.concat(task),
        count: this.state.tasks.count + 1,
      },
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
        <span>Total tasks: {tasks.count}</span>
        <Overview taskList={tasks.list} />
      </div>
    );
  }
}

export default App;
