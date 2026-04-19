import { useState } from "react";
import "../styles/resume.css";

function Experience({ type, resumeEditing }) {
  const [experience, setExperience] = useState({
    name: "",
    title: "",
    startDate: "",
    endDate: "",
  });

  const [editing, setEditing] = useState(true);

  const config =
    type === "job"
      ? { nameLabel: "Company", titleLabel: "Position" }
      : { nameLabel: "School", titleLabel: "Degree" };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return "";
    const [year, month] = dateString.split("-");
    const date = new Date(year, month - 1);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (experience.endDate && experience.endDate < experience.startDate) {
      alert("End date cannot be before start date!");
      return;
    }
    setEditing(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  return (
    <div className="experience-container">
      {resumeEditing && editing ? (
        <form onSubmit={handleSubmit}>
          <div className="labelInput">
            <label htmlFor="name">{config.nameLabel}:</label>
            <input
              type="text"
              id="name"
              value={experience.name}
              onChange={(e) =>
                setExperience({ ...experience, name: e.target.value })
              }
              required
            />
            <label htmlFor="title">{config.titleLabel}:</label>
            <input
              type="text"
              id="title"
              value={experience.title}
              onChange={(e) =>
                setExperience({ ...experience, title: e.target.value })
              }
              required
            />
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="month"
              id="startDate"
              value={experience.startDate}
              onChange={(e) =>
                setExperience({ ...experience, startDate: e.target.value })
              }
              required
            />
            <label htmlFor="endDate">End Date:</label>
            <input
              type="month"
              id="endDate"
              value={experience.endDate}
              onChange={(e) =>
                setExperience({ ...experience, endDate: e.target.value })
              }
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="experience-display">
          <article className="displayInfo">
            <h3>{experience.title}</h3>
            <h4>{experience.name}</h4>
            <p>
              {formatDisplayDate(experience.startDate)} -{" "}
              {formatDisplayDate(experience.endDate)}
            </p>
          </article>
          {resumeEditing && (
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ExperienceList({ title, type, resumeEditing }) {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, { id: crypto.randomUUID() }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section className="expList">
      <div>
        <h2>{title}</h2>
        {resumeEditing && <button type="button" onClick={addItem}>Add</button>}
      </div>
      {items.length === 0 ? (
        <p>No {title.toLowerCase()} added yet.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <div key={item.id} className="expListItem">
              <li>
                <Experience type={type} resumeEditing={resumeEditing} />
              </li>
              {resumeEditing && (
                <button type="button" onClick={() => removeItem(item.id)}>
                  Delete
                </button>
              )}
            </div>
          ))}
        </ul>
      )}
    </section>
  );
}

function Resume() {
  const [editing, setEditing] = useState(false);

  return (
    <div className="resume">
      <div>
        <h1>Resume</h1>
        <button type="button" onClick={() => setEditing(!editing)}>
          {editing ? "Save" : "Edit"}
        </button>
      </div>
      <ExperienceList
        title="Work Experience"
        type="job"
        resumeEditing={editing}
      />
      <ExperienceList
        title="Education"
        type="education"
        resumeEditing={editing}
      />
    </div>
  );
}

export default Resume;
