import "./App.css";
import Counter from "./components/Counter/Counter";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <div className="App">
      <h1>Redux Basic</h1>
      <Auth />
      <Counter />
    </div>
  );
}

export default App;
