import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>{count}</div>
      <div>
        <button onClick={decrementCount} style={{ marginRight: '10px' }}>
          Decrement
        </button>
        <button onClick={resetCount} style={{ marginRight: '10px' }}>
          Reset
        </button>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
}

export default App;