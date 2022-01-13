import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import { useState } from "react";
import A from "./components/A";
import { FirstNameContext, LastNameContext } from "./context";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <Counter />
      {!toggle && <Timer />}
      <button onClick={() => setToggle(!toggle)}>Toggle Timer</button>
      <FirstNameContext value="Harsh">
        <LastNameContext value="Sharma">
          <A />
        </LastNameContext>
      </FirstNameContext>
    </div>
  );
}

export default App;
