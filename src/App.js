import './css/App.css';
import './css/Home.css';
import './css/About.css';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
          <div className="pageContent">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/about" element ={<About />}/>
    
            </Routes>
          </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
