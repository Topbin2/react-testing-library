import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState(true);
  return (
    <div>
      <button
        style={{ backgroundColor: color ? "red" : "blue" }}
        onClick={() => setColor(!color)}
      >
        {color ? "Change to blue" : "Change to red"}
      </button>
    </div>
  );
}

export default App;
