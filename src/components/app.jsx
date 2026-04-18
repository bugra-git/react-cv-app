import Bio from "./bio.jsx";
import ExperienceList from "./resume.jsx";

function App() {
  return (
    <div className="app">
      <Bio />
      <ExperienceList title="Work Experience" type="job" />
      <ExperienceList title="Education" type="education" />
    </div>
  );
}

export default App;
