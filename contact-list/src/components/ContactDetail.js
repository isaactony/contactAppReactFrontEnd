import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faArrowLeft, faEnvelope, faPhone, faAddressBook, faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { NavBar } from './NavBar';

import '../App.css';

export function ContactDetail() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    fetch(`http://localhost:9292/contacts/${id}`)
      .then(response => response.json())
      .then(data => {
        setContact(data);
        setName(data.name);
        setEmail(data.email_id);
        setPhone(data.phone);
      });
  }, [id]);

  const handleUpdate = () => {
    fetch(`http://localhost:9292/contacts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email_id: email,
        phone: phone
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Success:', response);
        // TODO: handle success, e.g. show success message, etc.
      })
      .catch(error => {
        console.error('Error:', error);
        // TODO: handle error, e.g. show error message, etc.
      });
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contact-details" style={{ backgroundColor: 'black' }}>
      <h1 style={{ color: 'white' }}>Contact Details</h1>

         <p>
         <Link to={'/'}>
         <button className="btn btn-light me-4" >
         <FontAwesomeIcon icon={faArrowLeft} />
         <span className="ms-2">Back</span>
        </button>
    </Link>
         </p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
      <div className="details">
        <div className="row">
          <div className="col-sm-2" style={{ color: 'white' }}>Name:</div>
          <div className="col-sm-10">
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <p></p>

        <div className="row">
          <div className="col-sm-2" style={{ color: 'white' }}>Email:</div>
          <div className="col-sm-10">
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
        <p></p>

        <div className="row">
          <div className="col-sm-2" style={{ color: 'white' }}>Phone:</div>
          <div className="col-sm-10">
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
          </div>
        </div>
        <p></p>
        <div className="row text-center">
               <div className="col-sm-12">
                <button className="btn btn-light me-4" onClick={handleUpdate}>
                 Update <FontAwesomeIcon icon={faCheck} />
                </button>
         </div>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>
         <p></p>


        </div>
      </div>
    </div>
  );
}
