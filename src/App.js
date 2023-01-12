
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Header from './components/Header';
import Home from './components/Home';
import Product from './components/Product';
function App() {
  return (
    <div className="app"> 
      {/* <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Header/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </main>
      </BrowserRouter> */}
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
