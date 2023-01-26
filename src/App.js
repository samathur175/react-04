import { useState } from "react";
import "./App.css";
import Navbar from "./Compnents/Navbar";
import TextAreabox from "./Compnents/Textarr";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");

      document.body.style.backgroundColor = "#e8f0f2";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2C394B";
    }
  };

  return (
    <div className="App">
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextAreabox heading="Enter your text in the text area" />
    </div>
  );
}

export default App;
