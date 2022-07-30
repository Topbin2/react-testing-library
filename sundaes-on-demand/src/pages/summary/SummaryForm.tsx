import { useState } from "react";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <button disabled={checked}>Confirm order</button>
    </div>
  );
};

export default SummaryForm;
