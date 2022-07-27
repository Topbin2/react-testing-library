import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(true);
  const [disabled, setDisabled] = useState(false);
  return (
    <div>
      <button
        style={{ backgroundColor: color ? "red" : "blue" }}
        onClick={() => setColor(!color)}
        disabled={disabled}
      >
        {color ? "Change to blue" : "Change to red"}
      </button>
      <input type="checkbox" checked={disabled} onChange={() => setDisabled(!disabled)} />
    </div>
  );
}

export default App;
