import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Firstfeatures from './components/pages/Firstfeatures';
// import SecondFeatures from './components/pages/SecondFeatures';
import Submit from './components/pages/Submit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/pages/Form';
import Prediction from './components/pages/Prediction';
import AboutUs from './components/pages/AboutUs';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/predict' element={<Form />} />
          <Route path='/aboutus' element={<AboutUs />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}
export default App;
