import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import ProjectDisplay from './pages/ProjectDisplay';
import AgeCalculator from './components/AgeCalculator';
import WordCounter from './components/WordCounter';
import FetchData from './components/FetchData';
import ColorPicker from './components/ColorPicker';

function App(){
  return (
    <div className="App">
      <Router>
        
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path= '/agecalculator' element={<AgeCalculator />} />
          <Route path='/wordcounter' element={<WordCounter />} />
          <Route path = '/fetchdata' element={<FetchData />} />
          <Route path='/colorpicker' element={<ColorPicker />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;