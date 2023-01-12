
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/Home';
import Home from './components/Home';
import Product from './components/Product';
import HeaderHome from './components/HeaderHome';
function App() {
  return (
    <div className="app"> 
      <BrowserRouter>
      <main>
          <Routes>
            <Route exact path="/" element={<HeaderHome/>}/>
          </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
