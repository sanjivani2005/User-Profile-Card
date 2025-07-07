import React from "react";
import "./UserCard.css";

function UserCard({ name, email, age, image }) {
  return (
    <div className="user-card">
      <img className="avatar" src={image} alt={`${name}'s avatar`} />
      <div className="user-info">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Age:</strong> {age}</p>
      </div>
    </div>
  );
}

export default UserCard;
