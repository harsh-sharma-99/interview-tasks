import React, { useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
    renders.current++;
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
    renders.current++;
  };

  console.log(count, renders.current, "runx");
  return (
    <div>
      <h1>COUNT : {count}</h1>
      <h1>RENDER : {renders.current} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
};

export default React.memo(Counter);
