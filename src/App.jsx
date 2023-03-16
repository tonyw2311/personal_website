
import NavBar from './NavBar'
import HomePage from './pages/HomePage'
import { Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage/>} />


      </Routes>

    </div>
  )
}

export default App
