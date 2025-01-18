import { useState, useEffect, useRef } from "react";
const App_1 = () => {
  const [count, setCount] = useState(0);
  const a = useRef(0);
  useEffect(() => {
    console.log(`rendering and the value of a is ${a.current}`);
    a.current = a.current + 1;
  });
  return (
    <div>
      <h1>Count is {count}</h1>
      <div onClick={() => setCount((count) => count + 1)}>Click me</div>
    </div>
  );
};

export default App_1;
