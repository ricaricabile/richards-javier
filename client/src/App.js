import logo from './logo.svg';
import './App.css';
import { Switch, Route, Navigate, Routes  } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';
import AboutPage from './pages/about/aboutpage.component.jsx';
import ServicesPage from './pages/services/services.component.jsx';
import HelpPage from './pages/help/help.component.jsx';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        
        <Route path='/services' element={<ServicesPage/>} />
        <Route exact path='/help' element={<HelpPage/>} />
      </Routes >
    </div>
  );
}

export default App;
