
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Home from './components/Home';
import Header from './components/Header';
import Checkout from './components/Checkout';
function App() {
  return (
    <div className="app"> 
      <BrowserRouter>
      <main>
          <Routes>
            <Route exact path="/" element={[<Header />, <Home />]}/>
            <Route exact path="/checkout" element={[<Header />,<Checkout />]}/>
          </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
