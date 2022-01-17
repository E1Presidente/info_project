import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Header from './components/Header';
import Main from './components/Main';
import Contacts from './components/Contacts';
import About from './components/About';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;