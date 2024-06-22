import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Contacts from '/src/components/Contacts';
import Filter from '/src/components/Filter'
import ContactList from '/src/components/ContactList';
import '/src/components/styles.css';

class App extends Component {

state = {
contacts: [],
filter: '',
name: '',
number: ''
}



handleChange = (e) => {
  const {name, value} = e.currentTarget;
  this.setState({
    [name]:value
  });
  };



handleSubmit = (e) => {
e.preventDefault();
const { name, number, contacts } = this.state;
const contactExists = contacts.some(con => con.name === name);

if (contactExists) {
  alert("Kontakt o takiej nazwie już istnieje!");
  return;
}

const newContact = {
  id: nanoid(),
  name: name,
  number: number
}

this.setState((prevState) => ({
  contacts: [...prevState.contacts, newContact]
}));
};



searchContact = (e) => {
  const filter = e.target.value.toLowerCase();
  this.setState({
    filter : filter
  });
}


removeContact = (idToRemove) => {
  this.setState((preState) => ({
    contacts : preState.contacts.filter(contact => contact.id !== idToRemove)
  }));
  
};



render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((con) =>
      con.name.toLowerCase().startsWith(filter)
    );

return (
  
  <>
  <h1>Phonebook</h1>
    <Contacts
      handleChange={this.handleChange}
      handleChange2={this.handleChange}
      handleSubmit={this.handleSubmit}
    />
    <h2>Contacts</h2>
    <Filter
    search={this.searchContact}
    />
    <ContactList
    contacts={contacts}
    filter={filter}
    filteredContacts={filteredContacts}
    removeContact={this.removeContact}
    />

  </>
);
}
}
export default App;
