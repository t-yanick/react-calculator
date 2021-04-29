import React from 'react';
import propTypes from 'prop-types';

function Button({ name, key }) {
  return (
    <button type="button" name={name} key={key}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
};

export default Button;