import './App.css';
import Header from './components/Header';
import Education from './components/Education';
import About from './components/About';
import Publications from './components/Publications';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ResearchExperience from "./components/ResearchExperience";
import RelevantCourses from "./components/RelevantCourses";

function App() {
  return (
      <div>
          <Header />
          <Education />
          <About />
          <Publications />
          <ResearchExperience />
          <Projects />
          <Skills />
          <RelevantCourses />
      </div>
  );
}

export default App;
