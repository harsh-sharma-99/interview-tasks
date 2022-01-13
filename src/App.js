import "./App.css";
import Counter from "./Counter";
import Timer from "./Timer";
import { useState } from "react";
import A from "./components/A";
import { FirstNameContext, LastNameContext } from "./context";

function App() {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <input value={text} onChange={(e) => setText(e.target.value)} />
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
