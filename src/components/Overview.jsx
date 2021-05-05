import PropTypes from 'prop-types';
import './Overview.css';
import Task from './Task';

function Overview(props) {
  const { tasks, onDelete, onEdit } = props;
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
        );
      })}
    </ul>
  );
}

Overview.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

Overview.defaultProps = {
  taskList: ['Task 1', 'Task 2', 'Task 3']
};

export default Overview;
