import { Component } from 'react';
import Overview from './components/Overview';

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
    this.setState({
      tasks: this.state.tasks.concat(this.state.input),
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
        <Overview taskList={tasks} />
      </div>
    );
  }
}

export default App;
