import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [offsetTop, setOffsetTop] = useState(350);

  function moveUp() {
    setOffsetTop(offsetTop - 20);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      <button onClick={moveUp}>Move Up</button>

      <div
        className="box"
        value={offsetTop}
        style={{
          transform: `translateY(${offsetTop}px)`
        }}
      />

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
