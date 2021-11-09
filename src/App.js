import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { useState } from 'react';
import Alert from './components/Alert';

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

  const handleMode = () =>{
    // 
    if(mode==="light"){
      
      setmode("dark")
      document.body.style.backgroundColor = "grey"
      showAlert("Dark mode enabled","success")
    }
    else{
      setmode("light")   
      document.body.style.backgroundColor = "white"
      showAlert("Light mode enabled","success")
      
    }
  }

  return (
    <>
    {/* <Navbar title = "Dinesh's rings" aboutText = "About dinesh's site"/> */}
    {/* <Navbar  aboutText = "About dinesh's site"/> */}
    <Navbar mode={mode} handleMode = {handleMode} />
    <Alert  alert = {alert}/>
    <TextForm  mode={mode} showAlert = {showAlert} />
    
    {/* <About/> */}
    </>

  );
}

export default App;
