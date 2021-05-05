import PropTypes from 'prop-types';
import { Component } from 'react';
import Button from './Button';

class Task extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isEditable: false
    };
  }

  componentDidMount() {
    this.setState({
      text: this.props.task.text
    });
  }

  toggleEditable = () => {
    this.setState({
      isEditable: this.state.isEditable ? false : true
    });
  };

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleTaskChange = () => {
    this.props.onEdit(this.props.task.id, this.state.text);
    this.toggleEditable();
  };

  render() {
    const { task, onDelete } = this.props;
    const { text, isEditable } = this.state;
    let className = 'task-item';
    if (isEditable) {
      className += ' editable';
    }
    return (
      <li>
        <span>{task.number}. </span>
        <input
          type='text'
          value={text}
          className={className}
          readOnly={!isEditable}
          tabIndex={isEditable ? '0' : '-1'}
          onChange={(event) => this.handleInputChange(event)}
        />
        <Button onClickHandler={() => onDelete(task.id)} text='Del' />
        {isEditable ? (
          <Button onClickHandler={this.handleTaskChange} text='Change' />
        ) : (
          <Button onClickHandler={this.toggleEditable} text='Edit' />
        )}
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Task;