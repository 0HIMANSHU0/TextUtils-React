import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { 
//   BrowserRouter as Router, 
//   Routes, 
//   Route, 
//   // Link 
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // Whether tha dark mode is enabled or not
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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.color = "white";
      showAlert("Dark Mode has been enabled.", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
       {/* <Router> */}
        {/* <Navbar title="TextUtils" aboutText="Contact Us"/> */}
        {/* <Navbar/> */}
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path="/About" element={<About showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the Text to anaylize below:"
                mode={mode}
              />}>
            </Route>
          </Routes> */}
          <TextForm
                showAlert={showAlert}
                heading="Enter the Text to anaylize below:"
                mode={mode}
              />
        </div>
        <About showAlert={showAlert}/>
      {/* </Router> */}
  </>
  );
}

export default App;
