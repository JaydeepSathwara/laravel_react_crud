import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Navbar from './components/Navbar';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
    <div className="container">
      <Routes>
        <Route path = '/' element={<Home/>} ></Route>
        <Route path = '/create_record' element={<Create/>} ></Route>
        <Route path = '/edit/:id' element={<Edit/>} ></Route>
        <Route path = '/view/:id' element={<View/>} ></Route>
      </Routes>
    </div>
      </BrowserRouter>
    </div>
  );
}

export default App;