import Header from './component/Header';
import './App.css';
import Demo from './component/APIDemo';
import Home from './component/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Details from './component/Details' 
import Add from './component/Add'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
