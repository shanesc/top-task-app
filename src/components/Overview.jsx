import PropTypes from 'prop-types';

function Overview(props) {
  const { tasks, onDelete } = props;
  return (
    <ul style={style}>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.number}. {task.text}
            <button onClick={() => onDelete(task.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
}

Overview.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

Overview.defaultProps = {
  taskList: ['Task 1', 'Task 2', 'Task 3'],
};

const style = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

export default Overview;
