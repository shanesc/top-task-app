import PropTypes from 'prop-types';

function Button(props) {
  return <button onClick={props.onClickHandler}>{props.text}</button>;
}

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
