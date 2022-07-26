import "./App.css";
import { CounterContext } from "./Providers/Counter";
import { useContext } from "react";

function App() {
  const { counter, addNumber, subNumber } = useContext(CounterContext);

  return (
    <div className="App">
      {counter}
      <button onClick={addNumber}>Adicionar +1</button>
      <button onClick={subNumber}>Reduzir -1</button>
    </div>
  );
}

export default App;
