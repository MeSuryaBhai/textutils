
import React,{useState} from 'react';
// import {Route, Routes, Router} from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
   const [mode, setMode] = useState("light");
   const [alert, setAlert] = useState(null);

   const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      },1500);
   }

   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#061020';
      showAlert("Dark mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
      // setInterval (() =>{
      //   document.title = 'Hello textUtils!';
      // },2000);
      // setInterval (() =>{
      //   document.title = 'Install TextUtils Now!';
      // },1210);
    }
   }
  return (
    <>
    {/* <Router> */}
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          {/* <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route> */}

            {/* <Route exact path="/home" element={*/}<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>{/*}> 

            </Route>
          </Routes>*/}


      </div>


      {/* </Router> */}

    </>
  );
}

export default App;
