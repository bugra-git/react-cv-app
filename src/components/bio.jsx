import { useState } from "react";
import defaultAvatar from "../assets/user.png";

function Bio() {
  const [editing, setEditing] = useState(true);

  const [bio, setBio] = useState({
    name: "",
    tel: "",
    email: "",
    about: "",
    picture: defaultAvatar,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  return (
    <section className="bio">
      <form>
        <img src={bio.picture} alt="Profile picture" />
        {editing && (
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setBio({
                ...bio,
                picture: URL.createObjectURL(e.target.files[0]),
              })
            }
          />
        )}
        <label htmlFor="name">Name:</label>
        {editing ? (
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={bio.name}
            onChange={(e) => setBio({ ...bio, name: e.target.value })}
            required
          />
        ) : (
          <p>{bio.name}</p>
        )}
        <label htmlFor="tel">Phone:</label>
        {editing ? (
          <input
            type="tel"
            id="tel"
            placeholder="Enter phone number"
            value={bio.tel}
            onChange={(e) => setBio({ ...bio, tel: e.target.value })}
            required
            pattern="^\d{10}$"
          />
        ) : (
          <p>{bio.tel}</p>
        )}
        <label htmlFor="email">Email:</label>
        {editing ? (
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={bio.email}
            onChange={(e) => setBio({ ...bio, email: e.target.value })}
            required
          />
        ) : (
          <p>{bio.email}</p>
        )}
        <label htmlFor="about">About Me:</label>
        {editing ? (
          <textarea
            id="about"
            placeholder="Write a short bio about yourself"
            value={bio.about}
            onChange={(e) => setBio({ ...bio, about: e.target.value })}
            required
          />
        ) : (
          <p>{bio.about}</p>
        )}
        {editing ? (
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        ) : (
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        )}
      </form>
    </section>
  );
}

export default Bio;
