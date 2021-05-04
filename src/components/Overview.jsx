import PropTypes from 'prop-types';

function Overview(props) {
  const tasks = props.taskList;
  return (
    <ul style={style}>
      {tasks.map((task, i) => {
        return (
          <li key={task.id}>
            {i + 1}. {task.text}
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
