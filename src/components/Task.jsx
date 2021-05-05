import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from './Button';

class Task extends Component {
  constructor() {
    super();
    this.textInput = React.createRef();
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

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  toggleEditable = () => {
    this.setState({
      isEditable: !this.state.isEditable
    });
    this.focusTextInput();
  };

  handleInputChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleTextEdit = () => {
    this.props.onEdit(this.props.task.id, this.state.text);
    this.toggleEditable();
  };

  render() {
    const { task, onDelete } = this.props;
    const { text, isEditable } = this.state;

    let className = 'task-item';
    let modifyBtn = <Button onClickHandler={this.toggleEditable} text='Edit' />;
    if (isEditable) {
      className += ' editable';
      modifyBtn = <Button onClickHandler={this.handleTextEdit} text='Change' />;
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
          ref={this.textInput}
        />
        <Button onClickHandler={() => onDelete(task.id)} text='Del' />
        {modifyBtn}
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
