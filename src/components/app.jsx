import { useState } from "react";
import Bio from "./bio.jsx";

function App() {
  const [editing, setEditing] = useState(true);

  return (
    <div className="app">
      <Bio editing={editing} />
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Preview" : "Edit"}
      </button>
    </div>
  );
}

export default App;