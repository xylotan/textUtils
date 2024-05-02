import React,{useState} from 'react'
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  const [alert,setAlert]=useState('null');
  const showAlert=(message,type)=>{
      setAlert({msg:message,type:type});
      setTimeout(()=>{
        setAlert(null);
      },1300);
  }
  const [mode,setMode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#292929';
      showAlert("Dark Mode Enabled","success");
      //flash app title 
    
    //   setInterval(()=>{
    //     document.title="Install TextUtils Now";
    //   },2000);
    //   setInterval(()=>{
    //     document.title="TextUtils is Free";
    //   },1400);
     }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","success");
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
        <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
          {/* <Routes>
            //use exact path instead of path
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
