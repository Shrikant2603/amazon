import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from "./components/StateProvider";
import { auth } from "./components/firebase";

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app"> 
      <BrowserRouter>
      <main>
          <Routes>
            <Route exact path="/" element={[<Header />, <Home />]}/>
            <Route exact path="/checkout" element={[<Header />,<Checkout />]}/>
            <Route exact path="/login" element={<Login/>}/>
          </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
