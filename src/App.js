
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Login from './components/Login';
function App() {
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
