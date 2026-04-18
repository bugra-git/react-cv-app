import { useState } from "react";

function Experience({ type }) {
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
    setEditing(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">{config.nameLabel}:</label>
      {editing ? (
        <input
          type="text"
          id="name"
          value={experience.name}
          onChange={(e) =>
            setExperience({ ...experience, name: e.target.value })
          }
          required
        />
      ) : (
        <p>{experience.name}</p>
      )}

      <label htmlFor="title">{config.titleLabel}:</label>
      {editing ? (
        <input
          type="text"
          id="title"
          value={experience.title}
          onChange={(e) =>
            setExperience({ ...experience, title: e.target.value })
          }
          required
        />
      ) : (
        <p>{experience.title}</p>
      )}

      <label htmlFor="startDate">Start Date:</label>
      {editing ? (
        <input
          type="month"
          id="startDate"
          value={experience.startDate}
          onChange={(e) =>
            setExperience({ ...experience, startDate: e.target.value })
          }
          required
        />
      ) : (
        <p>{formatDisplayDate(experience.startDate)}</p>
      )}

      <label htmlFor="endDate">End Date:</label>
      {editing ? (
        <input
          type="month"
          id="endDate"
          value={experience.endDate}
          onChange={(e) =>
            setExperience({ ...experience, endDate: e.target.value })
          }
          required
        />
      ) : (
        <p>{formatDisplayDate(experience.endDate)}</p>
      )}

      {editing ? (
        <button type="submit">
          Save
        </button>
      ) : (
        <button
          type="button"
          onClick={handleEdit}
        >
          Edit
        </button>
      )}
    </form>
  );
}

function ExperienceList({ title, type }) {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, { id: crypto.randomUUID() }]);
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <section>
            <h2>{title}</h2>
            <button onClick={addItem}>Add {title}</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Experience type={type} />
                        <button type="button" onClick={() => removeItem(item.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ExperienceList;