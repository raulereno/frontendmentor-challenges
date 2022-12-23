import React, { useState } from "react";

const CalculatorApp = () => {
  const [theme, setTheme] = useState("theme1");

  const [operation, setOperation] = useState("");

  const calculate = () => {
    let aux = "";
    let operator = operation
      .split("")
      .filter((e) => ["x", "+", "/", "-"].includes(e))[0];

    switch (operator) {
      case "+":
        aux = operation.split("+");
        return setOperation(Number(aux[0]) + Number(aux[1]));
      case "-":
        aux = operation.split("-");
        return setOperation(Number(aux[0]) - Number(aux[1]));
      case "/":
        aux = operation.split("/");
        return setOperation(Number(aux[0]) / Number(aux[1]));
      case "x":
        aux = operation.split("x");
        return setOperation(Number(aux[0]) * Number(aux[1]));
      default:
        setOperation(operation);
        break;
    }
  };

  const deleteLastDigit = () => {
    let lastDigit = operation.split("")[operation.length - 1];
    <span></span>;
    let aux = operation.replace(lastDigit, "");
    setOperation(aux);
  };
  const changeTheme = () => {
    switch (theme) {
      case "theme1":
        setTheme("theme2");
        break;
      case "theme2":
        setTheme("theme3");
        break;
      case "theme3":
        setTheme("theme1");
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={`${theme !== "theme1" && theme}`}
      id="container_calculatorApp"
    >
      <div id="calculatorApp">
        <div className="header">
          <h5>calc</h5>
          <div className="theme_controller">
            <span className="theme_title">THEME</span>
            <div className="container_toggler">
              <div className="number_theme">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div onClick={changeTheme} className="switch">
                <div className="toggler"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="results">
          <span>{operation}</span>
        </div>
        <div className="console">
          <div className="console_numbers">
            <button onClick={() => setOperation(operation + "7")}>
              <span>7</span>
            </button>
            <button onClick={() => setOperation(operation + "8")}>
              <span>8</span>
            </button>
            <button onClick={() => setOperation(operation + "9")}>
              <span>9</span>
            </button>
            <button onClick={() => deleteLastDigit()} className="delete">
              <span>DEL</span>
            </button>
            <button onClick={() => setOperation(operation + "4")}>
              <span>4</span>
            </button>
            <button onClick={() => setOperation(operation + "5")}>
              <span>5</span>
            </button>
            <button onClick={() => setOperation(operation + "6")}>
              <span>6</span>
            </button>
            <button onClick={() => setOperation(operation + "+")}>
              <span>+</span>
            </button>
            <button onClick={() => setOperation(operation + "1")}>
              <span>1</span>
            </button>
            <button onClick={() => setOperation(operation + "2")}>
              <span>2</span>
            </button>
            <button onClick={() => setOperation(operation + "3")}>
              <span>3</span>
            </button>
            <button onClick={() => setOperation(operation + "-")}>
              <span>-</span>
            </button>
            <button onClick={() => setOperation(operation + ".")}>.</button>
            <button onClick={() => setOperation(operation + "0")}>
              <span>0</span>
            </button>
            <button onClick={() => setOperation(operation + "/")}>
              <span>/</span>
            </button>
            <button onClick={() => setOperation(operation + "x")}>
              <span>x</span>
            </button>
          </div>
          <div className="console_buttons">
            <button onClick={() => setOperation("")} className="reset">
              RESET
            </button>
            <button className="equal" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorApp;
