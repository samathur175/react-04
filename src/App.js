import "./App.css";
import Navbar from "./Compnents/Navbar";
import TextAreabox from "./Compnents/NewComp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TextAreabox heading="Enter your text in the text area" />
    </div>
  );
}

export default App;
