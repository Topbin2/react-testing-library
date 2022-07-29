import { useState, useCallback } from "react";

const useInput = (initialValue, validator) => {
  const [input, setInput] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = useCallback((event) => {
    setInput(event.target.value);
    setErrorMessage(validator(event.target.value));
  }, [validator]);

  return { input, handleInput, errorMessage };
};

export default useInput;
