import React from 'react';

function Screen({className, display}) {
  return (
    <div className={className}>{display}</div>
  );
}

export default Screen;