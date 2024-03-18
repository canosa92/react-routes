import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>}/> 
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router> 
  );
}

export default App;
