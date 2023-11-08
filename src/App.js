import "./styles.css";
import { useState, useEffect } from "react";

let i = 0;

export default function App() {
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, i - 1]);
  };

  useEffect(() => {
    i++;
  }, [list]);

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      {list.map((val) => {
        return (
          <button key={crypto.randomUUID()} onClick={add}>
            {val}
          </button>
        );
      })}
    </div>
  );
}
