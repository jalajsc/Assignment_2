import Header from './component/Header';
import logo from './logo.svg';
import './App.css';
import Demo from './component/APIDemo';
import ReactDOM from 'react-dom';
import Home from './component/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Details from './component/Details' 
import Store from './component/StoreData'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/StoreData" element={<Store />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
