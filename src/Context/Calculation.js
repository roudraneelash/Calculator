import { createContext, useState, useEffect } from "react";
import * as math from "mathjs";

// Creating a new context object
const CalculationContext = createContext();

// Creating a provider component to share data between components
function Provider({ children }) {
  // Using state hooks to manage the expression and the result
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(0);

  // Function to update the expression state
  function Update(exp) {
    setExpression(expression + exp + "");
  }

  // Function to clear the expression and result states
  function clear() {
    setExpression("");
    setResult(0);
  }

  // Function to evaluate the expression using the math.js library
  function equals() {
    try {
      const res = math.evaluate(expression);
      setResult(res);
    } catch (e) {
      setResult("");
    }
  }

  // Function to delete the last character of the expression state
  function del() {
    setExpression(expression.slice(0, -1));
  }

  // Creating an object with the data that needs to be shared between components
  const valueToShare = {
    expression,
    result,
    equals,
    Update,
    clear,
    del,
  };

  // Adding a useEffect hook to evaluate the expression whenever it changes
  useEffect(() => {
    equals();
    // eslint-disable-next-line
  }, [expression]);

  // Returning the context provider with the value to be shared and the child components
  return (
    <CalculationContext.Provider value={valueToShare}>
      {children}
    </CalculationContext.Provider>
  );
}

// Exporting the provider component and the context object
export { Provider };
export default CalculationContext;
