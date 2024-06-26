import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/product/store";

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
