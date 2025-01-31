import "./App.css";
import { useState } from "react";

const romanToNumber = (number) => {
  const roman_number = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  let aux = 0;

  for (let i = number.length - 1; i >= 0; i--) {
    let current = roman_number[number[i]];

    if (!current) return "Número Inválido";
    if (current < aux) {
      total -= current;
    } else {
      total += current;
    }
    aux = current;
  }
  return total;
};
const decimalToRoman = (roman) => {
  if (roman <= 0 || roman > 3999) return "Número inválido";
  const romanNumbers = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  let result = "";

  //lógica para converter números romanos(font GitHub)
  for (let [symbol, value] of romanNumbers) {
    while (roman >= value) {
      result += symbol;
      roman -= value;
    }
  }

  return result;
};

function App() {
  const [roman, setRoman] = useState("");
  const [result, setResult] = useState("");
  const [isDecimalToRoman, setIsDecimalToRoman] = useState(false);

  const calcResult = (value) => {
    setRoman(value);
    let response;
    if (!isDecimalToRoman) {
      response = romanToNumber(value);
    } else {
      response = decimalToRoman(value);
    }
    setResult(response);
  };

  const changeConversion = () => {
    setIsDecimalToRoman(isDecimalToRoman ? false : true);
  };
  return (
    <div className="container">
      <h2>Conversor de Números Romanos</h2>
      <input
        type="text"
        className="input-box"
        placeholder="Digite um número romano"
        value={roman}
        onChange={(e) => calcResult(e.target.value.toUpperCase())}
      />
      {result !== null && <p className="result">Resultado: {result}</p>}
      <div className="btn" onClick={changeConversion}>
        {isDecimalToRoman ? "Decimal -> Romano" : "Romano -> Decimal"}
      </div>
    </div>
  );
}

export default App;
