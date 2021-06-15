import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Form from "./components/Form";
import TeamMember from "./components/TeamMember";

const currentTeamMembers = [
  {
    name: "Joe",
    email: "joe@gmail.com",
    role: "Web Dev",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [teamMembers, setTeamMember] = useState(currentTeamMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
      return;
    const addedTeamMember = formValues;
    setTeamMember([addedTeamMember, ...teamMembers]);
    setFormValues(initialFormValues);
  };
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      {teamMembers.map((teamMember, index) => {
        return <TeamMember key={index} teamMember={teamMember} />;
      })}
    </div>
  );
}

export default App;
