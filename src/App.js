import "./App.css";
import { CounterContext } from "./Providers/Counter";
import { useContext } from "react";
import Container from "./Globalstyle/style";

function App() {
  const { counter, addNumber, subNumber } = useContext(CounterContext);

  return (
    <div className="App">
      <Container>
        <p>Exemplo contador com Context API</p>
        <p>Contador: {counter}</p>
        <div>
          <button onClick={addNumber}>Adicionar +1</button>
          <button onClick={subNumber}>Reduzir -1</button>
        </div>
      </Container>
    </div>
  );
}

export default App;
