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
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={() => setDisabled(!disabled)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
