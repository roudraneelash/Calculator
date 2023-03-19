import Button from "./Button";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useContext } from "react";
import CalculationContext from "../Context/Calculation";

export default function Keypad() {
  const { Update, clear, del, equals } = useContext(CalculationContext); // use the useContext hook to get the Update, clear, del, and equals functions from the CalculationContext

  function handleClick(el) {
    // define a function handleClick that accepts an element "el" as a parameter
    if (el === "del") {
      // if "el" is "del"
      del(); // call the del function
    } else if (el === "C") {
      // otherwise, if "el" is "C"
      clear(); // call the clear function
    } else if (el === "=") {
      // otherwise, if "el" is "="
      equals(); // call the equals function
    } else {
      // otherwise
      Update(el); // call the Update function with the "el" parameter
    }
  }

  return (
    <div className="keypad-container">
      <Button key={"clear"} className="secondary-gray" onClick={handleClick}>
        C
      </Button>
      <Button key={"modulo"} className="secondary-gray" onClick={handleClick}>
        %
      </Button>
      <Button
        key={"delete"}
        className="secondary-gray"
        onClick={() => handleClick("del")}
      >
        <RiDeleteBack2Line />
      </Button>
      <Button key={"divide"} className="secondary-gray" onClick={handleClick}>
        /
      </Button>
      <Button key={"seven"} onClick={handleClick}>
        7
      </Button>
      <Button key={"eight"} onClick={handleClick}>
        8
      </Button>
      <Button key={"nine"} onClick={handleClick}>
        9
      </Button>
      <Button key={"multiply"} className="secondary-gray" onClick={handleClick}>
        *
      </Button>
      <Button key={"four"} onClick={handleClick}>
        4
      </Button>
      <Button key={"five"} onClick={handleClick}>
        5
      </Button>
      <Button key={"six"} onClick={handleClick}>
        6
      </Button>
      <Button key={"minus"} className="secondary-gray" onClick={handleClick}>
        -
      </Button>
      <Button key={"one"} onClick={handleClick}>
        1
      </Button>
      <Button key={"two"} onClick={handleClick}>
        2
      </Button>
      <Button key={"three"} onClick={handleClick}>
        3
      </Button>
      <Button key={"plus"} className="secondary-gray" onClick={handleClick}>
        +
      </Button>
      <Button key={"zero-0"} onClick={handleClick}>
        00
      </Button>
      <Button key={"zero"} onClick={handleClick}>
        0
      </Button>
      <Button key={"dot"} onClick={handleClick}>
        .
      </Button>
      <Button key={"equal"} className="secondary-indigo" onClick={handleClick}>
        =
      </Button>
    </div>
  );
}
