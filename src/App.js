import React from "react";
// import Navbar from "./navpar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Login from "./login";
import Sign from "./sign";

 
function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            {/* <Sign/> */}
            <Routes>
            <Route  path="/" element={<Sign/>}/>
          <Route exact path="/login" element={<Login/>}/>
                
                </Routes>  
        </Router>
    );
}
 
export default App;
