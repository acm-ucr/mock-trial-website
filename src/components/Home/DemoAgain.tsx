"use client";
import { useState, useEffect } from "react";

function Demo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count changed:", count);
  }, [count]);

  return (
    <div className="flex flex-col justify-center p-20">
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p className="mx-auto">{count}</p>
    </div>
  );
}

export default Demo;
