import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope,faArrowLeft, faPhone, faAddressBook, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import '../ContactForm.css';
import { Link } from 'react-router-dom';


export function ContactForm() {
  const [name, setName] = useState('');
  const [email_id, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [relationship, setRelationship] = useState('');

  function handleSave(event) {
    event.preventDefault();
    console.log(event);
  
    const form = document.querySelector("#contact-form");
    console.log(form.email_id.value);

    const formData = new FormData(form);
    console.log(formData);
  
    const contactData = {
      name: form.name.value,
      phone: form.phone.value,
      email_id: form.email_id.value,
    };
    console.log(contactData);
  
    fetch('http://localhost:9292/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contactData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', contactData);
        // TODO: handle success, e.g. clear form, show success message, etc.
      })
      .catch(error => {
        console.error('Error:', error);
        // TODO: handle error, e.g. show error message, etc.
      });
  }

  return (
    <div className="container">
      <h1>Contact Form</h1>
      <p>
         <Link to={'/'}>
         <button className="btn btn-light me-4" >
         <FontAwesomeIcon icon={faArrowLeft} />
         <span className="ms-2">Back</span>
        </button>
    </Link>
         </p>
      <form id='contact-form'>
        <div className="form-group">
          <label htmlFor="name">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email_id">
            <FontAwesomeIcon icon={faEnvelope} />
          </label>
          <input
            type="email"
            className="form-control"
            id="email_id"
            placeholder="Email Address"
            value={email_id}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <FontAwesomeIcon icon={faPhone} />
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="relationship">
            <FontAwesomeIcon icon={faAddressBook} />
          </label>         
        </div>
        <div className="form-group">
        <Link to={'/'}>
          <button type="button" className="btn btn-primary" onClick={handleSave}>
            <FontAwesomeIcon icon={faCheck} /> Save
          </button>
        </Link>
        </div>
      </form>
    </div>
  );
}
