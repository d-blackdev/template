import React, {useEffect }from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage/Home";
import Footer from "./pages/Footer";
import User from "./components/User/User";
import store  from './redux/store'
import { loadUser } from './redux/actions/Auth/Login'
import {setAuthToken} from './setAuthToken'

if (localStorage.getItem('token')) {
  setAuthToken(localStorage.getItem('token'))
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path ="/user/:id" component={User}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
