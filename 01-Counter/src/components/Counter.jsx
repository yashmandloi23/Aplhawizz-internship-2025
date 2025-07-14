import { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  function CheckCount() {
    if (count < 1) {
      return true;
    } else {
      return false;
    }
  }

  const addValue = () => {
    if (CheckCount()) {
      setCount(count + 1);
    } else {
      setCount(count + 1); // Optional: You can just always allow increment
    }
  };

  const removeValue = () => {
    if (CheckCount()) {
      alert("value can't be negative ");
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h3>Counter {count} </h3>
      <button></button> {/* This is empty — you can remove it if not needed */}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </div>
  );
};

export default Counter;
