import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar';
import Home from './components/Home';
import Blogs from './components/AllBlogs';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AddProject from './components/AddProject'
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/blogs' element={<Blogs />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/add_project' element={<AddProject />} />
          <Route exact path='/blogs/:id' element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
