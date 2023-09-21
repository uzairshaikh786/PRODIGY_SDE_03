import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Login from './Login'; // Import the Login component

function App() {
  // Check if the user is already logged in based on the flag in local storage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // User state for login
  const [user, setUser] = useState(isLoggedIn ? { username: 'testuser' } : null);

  // Initialize contacts from localStorage or use an empty array
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  // Function to save contacts to localStorage
  const saveContactsToLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  // Function to add a new contact
  const addContact = (contact) => {
    // Generate a unique ID for the new contact
    const id = Math.max(...contacts.map((c) => c.id), 0) + 1;
    const newContact = { id, ...contact };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  // Function to delete a contact by ID
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  // Function to update a contact by ID
  const updateContact = (id, name, phone, email) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, name, phone, email } : contact
    );
    setContacts(updatedContacts);
    saveContactsToLocalStorage(updatedContacts);
  };

  // Use useEffect to save contacts to localStorage whenever the contacts state changes
  useEffect(() => {
    saveContactsToLocalStorage(contacts);
  }, [contacts]);
  
  // Function to handle user logout
  const handleLogout = () => {
    // Remove the login flag from local storage
    localStorage.removeItem('isLoggedIn');
    setUser(null);
  };
  return (
    <div className='center' style={{display: 'flex',justifyContent: 'center',alignItems:'center',width:'100%'}}>

    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="text-center">
        <h1 style={{margin: "auto",width: "100%",padding: "10px"}}>Contact Management App</h1>
        {user ? (
          <>
            <button onClick={() => setUser(null)}>Logout</button>
            <ContactForm addContact={addContact} />
            <ContactList contacts={contacts} onDelete={deleteContact} onUpdate={updateContact} />
          </>
        ) : (
          <Login onLogin={setUser} />
          )}
      </div>
    </div>
          </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import './App.css';
// import ContactList from './components/ContactList';
// import ContactForm from './components/ContactForm';
// import Login from './Login'; // Import the Login component

// function App() {
//   // User state for login
//   const [user, setUser] = useState(() => {
//     // Check if the user is already logged in based on the flag in local storage
//     const isLoggedIn = localStorage.getItem('isLoggedIn');
//     return isLoggedIn === 'true' ? { username: 'testuser' } : null;
//   });

//   // Initialize contacts from localStorage or use an empty array
//   const [contacts, setContacts] = useState(() => {
//     const storedContacts = localStorage.getItem('contacts');
//     return storedContacts ? JSON.parse(storedContacts) : [];
//   });

//   // Function to save contacts to localStorage
//   const saveContactsToLocalStorage = (contacts) => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   };

//   // Function to add a new contact
//   const addContact = (contact) => {
//     // Generate a unique ID for the new contact
//     const id = Math.max(...contacts.map((c) => c.id), 0) + 1;
//     const newContact = { id, ...contact };
//     const updatedContacts = [...contacts, newContact];
//     setContacts(updatedContacts);
//     saveContactsToLocalStorage(updatedContacts);
//   };

//   // Function to delete a contact by ID
//   const deleteContact = (id) => {
//     const updatedContacts = contacts.filter((contact) => contact.id !== id);
//     setContacts(updatedContacts);
//     saveContactsToLocalStorage(updatedContacts);
//   };

//   // Function to update a contact by ID
//   const updateContact = (id, name, phone, email) => {
//     const updatedContacts = contacts.map((contact) =>
//       contact.id === id ? { ...contact, name, phone, email } : contact
//     );
//     setContacts(updatedContacts);
//     saveContactsToLocalStorage(updatedContacts);
//   };

//   // Use useEffect to save contacts to localStorage whenever the contacts state changes
//   useEffect(() => {
//     saveContactsToLocalStorage(contacts);
//   }, [contacts]);
//  // Function to handle user login
//  const handleLogin = (userData) => {
//   // You can add authentication logic here.
//   // For simplicity, let's assume any non-empty username is valid.
//   if (userData.username.trim() !== '') {
//     setUser(userData);
//   } else {
//     // Handle invalid login here, e.g., display an error message.
//     alert('Invalid login. Please provide a username.');
//   }
// };

// const handleLogout = () => {
//   // Remove the login flag from local storage
//   localStorage.removeItem('isLoggedIn');
//   setUser(null);
// };

//   return (
//     <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
//       <div className="text-center">
//         <h1>Contact Management App</h1>
//         {user ? (
//           <>
//             <button onClick={() => setUser(null)}>Logout</button>
//             <ContactForm addContact={addContact} />
//             <ContactList contacts={contacts} onDelete={deleteContact} onUpdate={updateContact} />
//           </>
//         ) : (
//           <Login onLogin={setUser} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import './App.css';
// import ContactList from './components/ContactList';
// import ContactForm from './components/ContactForm';
// import Login from './Login'; // Import the Login component

// function App() {
//   // User state for login
//   const [user, setUser] = useState(null);

//   // ... Rest of your code ...

//   // Function to handle user login
//   const handleLogin = (userData) => {
//     // You can add authentication logic here.
//     // For simplicity, let's assume any non-empty username is valid.
//     if (userData.username.trim() !== '') {
//       setUser(userData);
//     } else {
//       // Handle invalid login here, e.g., display an error message.
//       alert('Invalid login. Please provide a username.');
//     }
//   };

//   return (
//     <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
//       <div className="text-center">
//         <h1>Contact Management App</h1>
//         {user ? (
//           <>
//             <button onClick={() => setUser(null)}>Logout</button>
//             <ContactForm addContact={addContact} />
//             <ContactList contacts={contacts} onDelete={deleteContact} onUpdate={updateContact} />
//           </>
//         ) : (
//           <Login onLogin={handleLogin} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

