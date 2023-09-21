// ContactList.js
import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDelete, onUpdate }) => {
  return (
    <div className="contact-list">
      <h1>Contact List</h1>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default ContactList;
