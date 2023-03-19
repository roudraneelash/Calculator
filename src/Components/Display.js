import { useContext } from "react";
import CalculationContext from "../Context/Calculation";

export default function Display() {
  const { expression, result } = useContext(CalculationContext);

  return (
    <div className="display-container">
      <p className="primary">{expression}</p>

      <p className="secondary">{result}</p>
    </div>
  );
}
