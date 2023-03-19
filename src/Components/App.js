import Display from "./Display";
import Keypad from "./Keypad";
import { Provider } from "../Context/Calculation";

export default function App() {
  return (
    <Provider>
      <div>
        <h1>Calculator</h1>
        <div className="container">
          <Display />
          <Keypad />
        </div>
      </div>
    </Provider>
  );
}
