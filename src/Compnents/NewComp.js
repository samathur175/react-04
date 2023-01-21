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
  const handleOnChange = (event) => {
    updatedText(event.target.value);
  };
  const [text, updatedText] = useState("");
  return (
    <div className="container">
      <h2>{props.heading}</h2>
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
      <button className="btn btn-primary mx-2" onClick={upperCaseText}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={lowerCaseText}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-2">Edit</button>
    </div>
  );
};

export default TextAreabox;
