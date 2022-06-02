import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const contacthandler = (contact) => {
    setContacts([...contacts, {id: uuidv4(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts != null && retriveContacts.length > 0) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return ( 
    <div className ="ui container">
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render = {(props) => (
            <ContactList
              {...props}
              contacts = {contacts}
              getContactId={removeContactHandler}
            />
          )}
        />
        <Route
          path="/add"
          exact
          render = {(props)=> (
            <AddContact
              {...props} 
              contactHandler = {contacthandler}
            />
          )}
        />
        <Route
          path="/contact/:id"
          component={ContactDetail}
        />
      </Switch>
    </div>
  );
}

export default App;
