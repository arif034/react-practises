import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CakeComponent from "./components/CakeComponent.js";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App"></div>
      <CakeComponent />
    </Provider>
  );
}
