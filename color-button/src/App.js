import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [selectColor, setSelectColor] = useState("red");
  const [toggle, setToggle] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const onClick = () => {
    if (!toggle) {
      setColor("blue");
      setSelectColor("blue");
      setToggle(!toggle);
    } else {
      setColor("red");
      setSelectColor("red");
      setToggle(!toggle);
    }
  };

  const onChange = () => {
    if (disabled) {
      if (selectColor === "blue") {
        setColor("blue");
        setDisabled(!disabled);
        return;
      }
      setColor("red");
      setDisabled(!disabled);
    } else {
      setColor("gray");
      setDisabled(!disabled);
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={onClick}
        disabled={disabled}
      >
        {toggle ? "Change to red" : "Change to blue"}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={onChange}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
