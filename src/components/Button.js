import React from 'react';

function Button({children, onTap, ...rest}) {
  function buttonClick() {
    onTap(children)
  }
  return (
    <button onClick={buttonClick} {...rest}>{children}</button>
  );
}

export default Button;