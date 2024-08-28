import { useState } from "react";
import "./Team.css";

const Team = () => {
  const [team, setTeam] = useState([]);

  const [name, setName] = useState("");
  const [skill, setSkill] = useState("");
  const [photo, setPhoto] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSkillChange = (e) => {
    setSkill(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleTeamAdd = () => {
    if (name !== "" || skill !== "" || photo !== "") {
      setTeam((prevState) => {
        return [{ name, skill, photo }, ...prevState];
      });

      setName("");
      setSkill("");
      setPhoto("");
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="skill"
        value={skill}
        onChange={handleSkillChange}
      />
      <input
        type="text"
        placeholder="photo"
        value={photo}
        onChange={handlePhotoChange}
      />
      <button onClick={handleTeamAdd}>Add</button>
      <hr />
      <div className="team-area">
        {team.length > 0 ? (
          team.map((item, index) => {
            return (
              <div key={index} className="team-item">
                <img src={item.photo} alt="" />
                <h2>{item.name}</h2>
                <p>{item.skill}</p>
              </div>
            );
          })
        ) : (
          <p>No data found</p>
        )}
      </div>
    </>
  );
};

export default Team;
