import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, color, wide, clickHandler,
  } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    'Button',
    (name === '÷' || name === 'X' || name === '-' || name === '+' || name === '=') ? color : 'gray',
    wide ? 'doubleButton' : ' ',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button type="button" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
