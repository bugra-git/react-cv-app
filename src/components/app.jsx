import Bio from "./bio.jsx";
import ExperienceList from "./resume.jsx";
import "../styles/app.css";

function App() {
  return (
    <div className="app">
      <Bio />
      <div className="resume">
        <h1>Resume</h1>
        <ExperienceList title="Work Experience" type="job" />
        <ExperienceList title="Education" type="education" />
      </div>
    </div>
  );
}

export default App;
