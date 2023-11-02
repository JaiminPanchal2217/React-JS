import React, { useRef } from 'react';

function ButtonClickCounter() {
  const clickCountRef = useRef(0);

  const handleClick = () => {
    clickCountRef.current++;
    alert(`Button clicked! Click count: ${clickCountRef.current}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default ButtonClickCounter;