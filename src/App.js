import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About'
import { useState } from 'react';
import React from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App(props) {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }

  // const handleMode = () =>{
  //   // 
  //   if(mode==="light"){
      
  //     setmode("dark")
  //     document.body.style.backgroundColor = "grey"
  //     showAlert("Dark mode enabled","success")
  //   }
  //   else{
  //     setmode("light")   
  //     document.body.style.backgroundColor = "white"
  //     showAlert("Light mode enabled","success")
      
  //   }
  // }

  const handleRedMode = () =>{
    
    setmode("red")
    document.body.style.backgroundColor = "rgb(179, 58, 58)"
    showAlert("Red mode enabled","success")
     
    
  }

  const handleDarkMode = () =>{
    // 
    
      
    setmode("dark")
    document.body.style.backgroundColor = "grey"
    showAlert("Dark mode enabled","success")
    
    
      
  }
  

  const handleLightMode = () =>{
    // 
    
    setmode("light")   
    document.body.style.backgroundColor = "white"
    showAlert("Light mode enabled","success")
      
    
  }

  return (
    <>
    {/* <Navbar title = "Dinesh's rings" aboutText = "About dinesh's site"/> */}
    {/* <Navbar  aboutText = "About dinesh's site"/> */}
    
    
    
    <Router>
      <Navbar  mode={mode}  handleRedMode = {handleRedMode} handleDarkMode = {handleDarkMode} handleLightMode={handleLightMode} />
      <Alert  alert = {alert}/>
      <div className="container my-3">
      <Routes>
            <Route exact path="/about" element={<About />}>
              
            </Route>
            <Route exact path="/" element={<TextForm  mode={mode} showAlert = {showAlert} />}>
            </Route>
      </Routes>
      </div>
    </Router>

      
      
    </>
  );
  
}
  

export default App;
