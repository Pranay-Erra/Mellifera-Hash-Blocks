import logo from './logo.svg';
import './App.css';
import ContactForm from './contactForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
