
import './App.css';
import NavBar from './components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen" >
      <NavBar></NavBar>
      <Routes>
        
        {/* <Route path='/' element= <NavBar></NavBar> /> */}
        <Route path='/home' element= <Home></Home> />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
