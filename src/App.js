import "./App.css";
import Counter from "./components/Counter/Counter";
import Auth from "./components/Auth/Auth";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <div className="App">
      <h1>Redux Basic</h1>
      <Provider store={store}>
        <Auth />
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
