import logo from "./logo.svg";
import "./App.css";
import { capturar, guardar } from "../src/store/actions/pokemon.actions";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={()=>{dispatch(capturar("charizard"))}}>
        capturar
      </button>
      <button onClick={()=>{dispatch(guardar("charizard"))}}>
        guardar
      </button>
    </div>
  );
}

export default App;
