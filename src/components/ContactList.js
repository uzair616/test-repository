import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContacts = props.contacts.map((contact) => {
    return(
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    );
  });
  return( 
    <div className="main">
      <div className="ui celled list">
        <br/>
        <h2>
          Contact List
          <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
          </Link>
        </h2>
        {renderContacts}
      </div>
    </div>
  );
}

export default ContactList;
