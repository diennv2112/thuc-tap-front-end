import { useState } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState<number>(0);
  const decreasing = () => {
    if (count == 0) return setCount((count = 0));
    setCount(count - 1);
  };
  const increasing = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div className="flex justify-center">
        <button
          className="desNumber rounded-[50%] border border-green-500 w-[40px] h-[40px]"
          onClick={decreasing}
        >
          -
        </button>
        <div className="disNumber w-[70px] h-[40px] border border-green-500 mx-2 pt-2">
          {count}
        </div>
        <button
          className="incNumber rounded-[50%] border border-green-500 w-[40px] h-[40px]"
          onClick={increasing}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default App;
