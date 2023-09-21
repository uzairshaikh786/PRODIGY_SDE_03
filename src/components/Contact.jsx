// Contact.js
import React, { useState } from 'react';

const Contact = ({ contact, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(contact.name);
  const [updatedPhone, setUpdatedPhone] = useState(contact.phone);
  const [updatedEmail, setUpdatedEmail] = useState(contact.email);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(contact.id, updatedName, updatedPhone, updatedEmail);
    setIsEditing(false);
  };

  return (
    <div className="contact">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            value={updatedPhone}
            onChange={(e) => setUpdatedPhone(e.target.value)}
          />
          <input
            type="text"
            value={updatedEmail}
            onChange={(e) => setUpdatedEmail(e.target.value)}
          />
          <button onClick={handleSaveClick} style={{margin: "10px"}}>Save</button>
        </>
      ) : (
        <>
          <h2>{contact.name}</h2>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <div class="button-group">
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={() => onDelete(contact.id)} >Delete</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
