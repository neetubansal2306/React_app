// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const removeBodyClasses = () => {
    document.body.classList.remove("primary");
    document.body.classList.remove("success");
    document.body.classList.remove("warning");
    document.body.classList.remove("danger");
    document.body.classList.remove("light");
    document.body.classList.remove("dark");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(24,37,50)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils-Light Mode";

      // form-check-label.color'black';f
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="textUtils"
        aboutText="about TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" /> 
        {/* <About showAlert={showAlert} /> */}
      </div>
      {/* <Route>
        </Route>
        <Route>
        </Route>
        <Navbar />
          <Routes>
            <Route path="/about">{<About />}</Route>
            <Route path="/">
              {
              }
            </Route>
          </Routes>
      </Router> */}
    </>
  );
}
export default App;
