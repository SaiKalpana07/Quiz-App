import React,{Fragments} from "react";
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Welcome from "./Components/Welcome/Welcome";
import Userdetails from "./Components/Userdetails/Userdetails";
import Question from "./Components/Question";
// import Questionlist from "./Components/Questionlist.js";
import Success from "./Components/Success.js/Success.js";
import TryAgain from "./Components/TryAgain/TryAgain";

 function App(){
  return(
     
     <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/userdetails" element={<Userdetails />} />
        <Route path="/question" element={<Question />} />
        {/* <Route path="/questionlist" element={<Questionlist />} /> */}
        <Route path="/success" element={<Success />} />
        <Route path="/tryagain" element={<TryAgain />} />

      </Routes>
     </Router>
     
    
    
  );
  
 }
 export default App;
