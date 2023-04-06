import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [x, setX] = useState(0);
  const handel = () => {
    setX(x + 1);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handel}>➕</button>
      <h2>{x % 2 == 1 ? null : x}</h2>
    </div>
  );
}
