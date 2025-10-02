import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const Counting = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="counter_body">
        <h1>{count}</h1>
        <button onClick={Counting}>counter button</button>
      </div>
    </>
  );
}

export default App;
