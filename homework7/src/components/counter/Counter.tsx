import React, { useState } from 'react';

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(1);

  const incrementHandler = () => {
    setCounter((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={incrementHandler}>+</button>
      <h2>{counter}</h2>
      {counter > 0 && <button onClick={decrementHandler}>-</button>}
    </div>
  );
};
