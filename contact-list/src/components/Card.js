import React, { useState } from 'react';

function Card({ contact, index}) {

  

  return (
    <div className="contact-list">
    <h1>Contact List</h1>
      <div key={contact.id} className="contact">
        <span className="name">{contact.name}</span>
        <span className="actions">
          <a href={`tel:${contact.phone}`} className="call-btn">Call</a>
          <a href={`sms:${contact.phone}`} className="sms-btn">SMS</a>
        </span>
      </div>
    </div>
  );
}


export default Card;