import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, clickHandler,
  } = props;

  const handleClick = () => {
    clickHandler(name);
  };
  return (
    <div className="">
      <button type="button" onClick={handleClick}>
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
