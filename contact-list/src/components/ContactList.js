import React, { useEffect, useState } from 'react';
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faAddressBook, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import { Link } from 'react-router-dom';

import '../App.css';

export function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [contactId, setContactId] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  let id;
  switch(selectedGroup) {
    case "All":
      id = '/';
      break;
    case "Family":
      break;
    case "Work":
      id = "2";
      break;
    case "Friends":
      id = "3";
      break;
    default:
  }
  


  useEffect(() => {
    fetch('http://localhost:9292/')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:9292/contacts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Success:', response);
        // Remove the contact from the list
        setContacts(contacts.filter(contact => contact.id !== id));
      })
      .catch(error => {
        console.error('Error:', error);
        // TODO: handle error, e.g. show error message, etc.
      });
  };

  const handleSearch = (searchTerm) => {
    fetch(`http://localhost:9292/contacts?search=${searchTerm}`)
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => {
        console.error('Error:', error);
        // TODO: handle error, e.g. show error message, etc.
      });
  };

 


  const handleGroupChange = (event) => {
    const group = event.target.value;
    setSelectedGroup(group);
  };

  const groupOptions = ['All', 'Friends', 'Family', 'Work'];

  return (
    <div className="contact-list">
      <NavBar onSearch={handleSearch} />
      <h1>Contact List</h1>
      <div className="group-filter">
        <span>Filter by group:</span>
        <select className="form-select" onChange={handleGroupChange}>
          {groupOptions.map(group => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>
      </div>
      {contacts.map(contact => (
        <div key={contact.id} className="contact">
          <Link to={`/contacts/${contact.id}`}>
            <span className="name">{contact.name}</span>
          </Link>
          <span className="name">{contact.phone}</span>
          <span className="actions">
            <a href={`tel:${contact.phone}`}>
              <button className="btn btn-outline-light me-2">
                <FontAwesomeIcon icon={faPhone} />
              </button>
            </a>
            <button type="button" className="btn btn-danger mr-3" onClick={() => handleDelete(contact.id)}>
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </button>
          </span>
          <span>         
               <button type="button" className="btn btn-primary">{selectedGroup}</button>

          </span>
        </div>
      ))}
    </div>
  );
}
