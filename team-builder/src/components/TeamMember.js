import React from "react";

const TeamMember = (props) => {
  const { teamMember } = props;
  return (
    <div>
      <h2>{teamMember.name}</h2>
      <p>Email: {teamMember.email}</p>
      <p>Role: {teamMember.role}</p>
    </div>
  );
};

export default TeamMember;
