import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("coverted to uppercase","success");
  };
  const handleLoClick = () => {
    // console.log('uppercase was clicked' + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("coverted to lowercase","success");

  };
  // const handleSummaryClick = () => {
  //   if (text.trim() === "") {
  //     alert("Please enter some text!");
  //     return;
  //   }
  //   // Example logic: Extract first 5 words as the summary
  //   let summary = text.split(" ").slice(0, 5).join(" ");
  //   setText(summary);
  // };
  const handleSummaryClick = () => {
    let sentences = text.split('.'); // Split text into sentences
    let summary = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : ''); // Generate a summary
    setText(summary); // Update the state with the summary
  };
  // const handleSumClick = () => {
  //   // console.log('uppercase was clicked' + text);
  //   let newText = "";
  //   setText(newText);
  // };
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
  };
  const handleonChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your text here!");
  return (
    <>
      <div>
        <h2>{props.heading}</h2>
        {/* <form className='mx-5'> */}
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleonChange}
            id="Mybox"
            className="form-control"
            rows="8"
          >
            Enter your text here!
          </textarea>
        </div>
        <button className="btn-btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn-btn-success mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn-btn-success mx-1" onClick={handleSummaryClick}>
          Summary
        </button>
        <button className="btn-btn-success mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        {/* </form> */}
      </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </div>
      <h4>Preview Summary</h4>
      <p>{text}</p>
    </>
  );
}
