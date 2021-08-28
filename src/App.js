import './App.css';
import React,{useState} from 'react';
import {SignIn , Login , Navbar , Olxcard , Addproduct, Chat} from "./containers";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [login , setlogin] = useState(localStorage.getItem("islogin"))
  const roomId = localStorage.getItem("roomid")
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
         <SignIn/>
        </Route>
        <Route path="/Login">
        <Login/>
        </Route>
        {login=="true" && 
        <>
        <Route path="/product">
        <Navbar/>
        </Route>
        <Route path="/Addproduct">
        <Addproduct/>
        </Route>
        <Route path="/Chat">
        <Chat/>
        </Route>
        
        </>
        
        }
        
       </Switch>

      </Router>
     
      
      {/* <Olxcard/> */}
      
    </div>
  );
}

export default App;
