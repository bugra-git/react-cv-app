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
      <img src={bio.picture} alt="Profile" />

      {editing ? (
        <form onSubmit={handleSubmit}>
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
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={bio.name}
            onChange={(e) => setBio({ ...bio, name: e.target.value })}
            required
          />
          <label htmlFor="tel">Phone:</label>
          <input
            type="tel"
            id="tel"
            placeholder="Enter phone number"
            value={bio.tel}
            onChange={(e) => setBio({ ...bio, tel: e.target.value })}
            required
            pattern="^\d{10}$"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={bio.email}
            onChange={(e) => setBio({ ...bio, email: e.target.value })}
            required
          />
          <label htmlFor="about">About Me:</label>
          <textarea
            id="about"
            placeholder="Write a short bio about yourself"
            value={bio.about}
            onChange={(e) => setBio({ ...bio, about: e.target.value })}
            required
          />
          <button type="submit">Save Bio</button>
        </form>
      ) : (
        <div className="bio-display">
          <h2>{bio.name}</h2>
          <div className="contact-info">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone-icon lucide-phone"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              {bio.tel}
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail-icon lucide-mail"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              {bio.email}
            </span>
          </div>
          <article>
            <h3>About Me</h3>
            <p className="about-text">{bio.about}</p>
          </article>
          <button type="button" onClick={handleEdit}>
            Edit Profile
          </button>
        </div>
      )}
    </section>
  );
}

export default Bio;
