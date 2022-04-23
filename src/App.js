import "./App.css";
import Home from "./components/home/index";
import Education from "./components/education/index";
import Projects from "./components/projects/index";
import Contact from "./components/contact/index";
import Skills from "./components/skills/index";

import "animate.css";
function App() {
  return (
    <div className="App">
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
