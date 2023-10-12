import React, { useState } from "react";
import "./App.css";

function App() {
  const abecedario = "abcdefghijklmnñopqrstuvwxyz";

  const [textoC, setTextoC] = useState("");
  const [resultadoC, setResultadoC] = useState("");
  const [desplazamiento, setDesplazamiento] = useState(0);

  const [textoDC, setTextoDC] = useState("");
  const [resultadoDC, setResultadoDC] = useState("");
  const [desplazamientoDC, setDesplazamientoDC] = useState(0);

  const handleCifrarClick = () => {
    CifradoCesar(textoC, desplazamiento);
  };
  const handleDescifrarClick = () => {
    DescifradoCesar(textoDC, desplazamientoDC);
  };

  function CifradoCesar(texto, rango) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      const esLetra = /[a-zA-Z]/.test(char);

      if (esLetra) {
        let posicion = abecedario.indexOf(char.toLowerCase());

        if (posicion >= 0) {
          posicion = (posicion + rango) % 26;
          if (posicion < 0) {
            posicion += 26;
          }
          resultado += abecedario[posicion];
        }
      } else {
        resultado += char;
      }
    }

    setResultadoC(resultado);
  }

  function DescifradoCesar(texto, rango) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
      const char = texto[i];
      const esLetra = /[a-zA-Z]/.test(char);

      if (esLetra) {
        let posicion = abecedario.indexOf(char);

        if (posicion >= 0) {
          posicion = (posicion - rango) % 27;

          if (posicion < 0) {
            posicion += 27;
          }

          resultado += abecedario[posicion];
        }
      } else {
        resultado += char;
      }
    }

    setResultadoDC(resultado);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Cifrado César</h1>
        <h3>Solo se aceptan letras minúsculas</h3>
        <label>Texto a cifrar</label>
        <input
          type="text"
          value={textoC}
          onChange={(e) => setTextoC(e.target.value)}
        />
        <label>Rango de desplazamiento:</label>
        <input
          type="number"
          value={desplazamiento}
          onChange={(e) => setDesplazamiento(parseInt(e.target.value))}
        />
        <br />
        <br />
        <button onClick={handleCifrarClick}>CIFRAR</button>
        <br />
        <br />
        <label>Resultado: {resultadoC}</label>
        <br />
        <label>Texto a descifrar</label>
        <input
          type="text"
          value={textoDC}
          onChange={(e) => setTextoDC(e.target.value)}
        />
        <label>Rango de desplazamiento:</label>
        <input
          type="number"
          value={desplazamientoDC}
          onChange={(e) => setDesplazamientoDC(parseInt(e.target.value))}
        />
        <br />
        <br />
        <button onClick={handleDescifrarClick}>DESCIFRAR</button>
        <br />
        <br />
        <label>Resultado: {resultadoDC}</label>
      </div>
    </div>
  );
}

export default App;
