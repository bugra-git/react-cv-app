import { useState } from "react";

function Bio({editing}) {
    const [bio, setBio] = useState({name:"", tel:"", email:""});
    return (
        <section className="bio">
            <label htmlFor="name">Name:</label>
            {editing ? <input type="text" id="name" placeholder="Enter name" value={bio.name} onChange={(e) => setBio({...bio, name: e.target.value})}/> : <p>{bio.name}</p>}
            <label htmlFor="tel">Phone:</label>
            {editing ? <input type="tel" id="tel" placeholder="Enter phone number" value={bio.tel} onChange={(e) => setBio({...bio, tel: e.target.value})}/> : <p>{bio.tel}</p>}
            <label htmlFor="email">Email:</label>
            {editing ? <input type="email" id="email" placeholder="Enter email" value={bio.email} onChange={(e) => setBio({...bio, email: e.target.value})}/> : <p>{bio.email}</p>}
        </section>
    );
}

export default Bio;