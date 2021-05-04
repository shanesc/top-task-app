import PropTypes from 'prop-types';

function Overview(props) {
  return (
    <ul>
      {props.taskList.map((task, index) => {
        return <li key={index}>{task}</li>;
      })}
    </ul>
  );
}

Overview.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.string),
};

Overview.defaultProps = {
  taskList: ['Task 1', 'Task 2', 'Task 3'],
};

export default Overview;
