import React, { useEffect, useReducer, useState } from "react";
import { calcReducer } from "../reducer/calcReducer";

export const Calculator = () => {
  const [calcState, dispatch] = useReducer(calcReducer, null);
  const [inputValue, setInputValue] = useState("");

  console.log("input", inputValue);
  console.log("calcState", calcState);

  const handleInputValue = (newValue) => {
    setInputValue((prev) => parseInt(`${prev}${newValue}`));
  };

  useEffect(() => {
    setInputValue("");
  }, [calcState]);

  const handleAdd = () => {
    dispatch({ type: "ADD", value: inputValue });
  };

  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT", value: inputValue });
  };

  const handleDivide = () => {
    dispatch({ type: "DIVIDE", value: inputValue });
  };

  const handleMultiply = () => {
    dispatch({ type: "MULTIPLY", value: inputValue });
  };

  return (
    <div>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
        return <button onClick={() => handleInputValue(item)}>{item}</button>;
      })}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleDivide}>/</button>
      <button onClick={handleMultiply}>*</button>
      <div>{inputValue}</div>
      <div>{calcState}</div>
    </div>
  );
};
