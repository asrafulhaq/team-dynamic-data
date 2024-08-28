import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleCountInc = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const handleCountDesc = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };

  const handleCountReset = () => {
    setCount(0);
  };

  const handleCountSet = () => {
    if (input) {
      setCount(input);
      setInput("");
    } else {
      alert("no value found");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <hr />
      <button onClick={handleCountDesc}>--</button>
      <button onClick={handleCountInc}>++</button>
      <button onClick={handleCountReset}>reset</button>
      <button onClick={handleCountSet}>set</button>
      <input type="text" value={input} onChange={handleInputChange} />
    </div>
  );
};

export default Counter;
