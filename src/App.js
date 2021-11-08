import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
function App() {
  return (
    <>
    {/* <Navbar title = "Dinesh's rings" aboutText = "About dinesh's site"/> */}
    {/* <Navbar  aboutText = "About dinesh's site"/> */}
    <Navbar />
    <TextForm/>
    {/* <About/> */}
    </>

  );
}

export default App;
