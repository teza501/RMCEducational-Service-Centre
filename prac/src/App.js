import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import {Home} from './components/Home/Home'
import { Navbar } from './components/Navbar/Navbar';
import { Contact } from './components/contact/Contact';
import { Blog } from './components/Blog/Blog';
// import Footer from './components/footer/Footer';
function App() {

  return (
    <div className="App">
    
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      </Routes>
    {/* <Footer /> */}
      </Router>
    
    </div>
  );
}

export default App;
