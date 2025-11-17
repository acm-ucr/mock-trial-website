"use client";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col justify-center p-20">
      <button onClick={increment}>Increment</button>
      <p className="mx-auto">{count}</p>
    </div>
  );
}

export default Counter;
