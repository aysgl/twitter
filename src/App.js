import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.scss';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Layout from './components/Layout';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
