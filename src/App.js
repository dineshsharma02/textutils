import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { useState } from 'react';
function App(props) {
  const [mode, setmode] = useState("light")

  const handleMode = () =>{
    // 
    if(mode==="light"){
      
      setmode("dark")
      document.body.style.backgroundColor = "grey"
    }
    else{
      setmode("light")   
      document.body.style.backgroundColor = "white"
      
    }
  }

  return (
    <>
    {/* <Navbar title = "Dinesh's rings" aboutText = "About dinesh's site"/> */}
    {/* <Navbar  aboutText = "About dinesh's site"/> */}
    <Navbar mode={mode} handleMode = {handleMode} />
    <TextForm  mode={mode} />
    {/* <About/> */}
    </>

  );
}

export default App;
