import React, { useState } from "react";

const TextAreabox = (props) => {
  const upperCaseText = () => {
    let newText = text.toUpperCase();
    updatedText(newText);
  };
  const lowerCaseText = () => {
    let newText = text.toLowerCase();
    updatedText(newText);
  };
  const clearText = () => {
    document.getElementById("floatingTextarea2").value = "";
  };
  const handleOnChange = (event) => {
    updatedText(event.target.value);
  };
  const [text, updatedText] = useState("");
  return (
    <div>
      <h2 style={{ color: props.mode === "light" ? "dark" : "light" }}>
        {props.heading}
      </h2>
      <div className="container my-3">
        <textarea
          className="form-control"
          placeholder="Text"
          id="floatingTextarea2"
          rows="8"
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "dark" : "light" }}
      >
        <button className="btn btn-primary mx-1" onClick={upperCaseText}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={lowerCaseText}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text Area
        </button>
        {/* <button className="btn btn-primary mx-2">Edit</button> */}
        <h2 className="my-3">Text Summary</h2>
        <p className="mx-3">
          {text.split(" ").length} Words and {text.length} Characters
        </p>
      </div>
    </div>
  );
};

export default TextAreabox;
