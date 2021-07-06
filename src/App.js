import React, { useEffect } from "react";
import Login from './components/login/login'
import PrivateRoute from './components/helpers/PrivateRoute'
import Home from './components/home/home'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default function App() {

  useEffect(()=>{
              if( window.location.href !== "http://localhost:3000/" && window.location.href !== "http://localhost:3000/login" ){
                window.location.href = "http://localhost:3000/"
              }
  },[])
  if(window.location.hash && !localStorage.getItem("token")){
    document.body.style.backgroundColor = "white"
    sessionStorage.setItem("token",window.location.hash.split("&")[0].split("=")[1])
    window.location.href = "http://localhost:3000/"
  
  }
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" component={Home} exact></PrivateRoute>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </Router>
  )

}

