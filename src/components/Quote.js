import React from 'react';

function Quote() {
  return (
    <div>
      <h1 className="quote-title">Quote of the day</h1>
      <p className="quote">
        “A life spent making mistakes is not only more honorable,
        but more useful than a life spent doing nothing.”
      </p>
      {' '}
      <span className="quote">Author: Unknown</span>
    </div>
  );
}

export default Quote;
