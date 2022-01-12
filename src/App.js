import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Counter />
      {!toggle && <Timer />}
      <button onClick={() => setToggle(!toggle)}>Toggle Timer</button>
    </div>
  );
}

export default App;
