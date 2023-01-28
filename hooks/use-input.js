import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const valueValid = validateValue(enteredValue);
  // If the value is invalid and the input has been touched, trigger hasError
  const hasError = !valueValid && inputTouched;

  const valueChangeHndlr = (event) => {
    // Hold target value in setEnteredValue
    setEnteredValue(event.target.value);
  };

  const inputBlurHndlr = (event) => {
    // Update state to hold that the input has been touched
    setInputTouched(true);
  };

  const reset = () => {
    // Reset the states back to initial state
    setEnteredValue("");
    setInputTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueValid,
    hasError,
    valueChangeHndlr,
    inputBlurHndlr,
    reset,
  };
};

export default useInput;
