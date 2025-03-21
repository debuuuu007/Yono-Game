import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Games from './pages/Games';
import Footer from './components/Footer';

import About from './components/About';
import T_C from './components/TermsAndConditionsPage';
import ContactPage from './components/ContactPage';
const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/games" element={<Games />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/about" element={<About/>}/>
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/T&C' element={<T_C/>} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;