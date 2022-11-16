import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

class Phonebook extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = formData => {
    const { name, number } = formData;
    const contact = {
      name: name,
      number: number,
      key: nanoid(),
    };

    this.checkName(name)
      ? alert(name + ' is already in contacts')
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  checkName = name => {
    const { contacts } = this.state;
    const normalisedFilter = name.toLocaleLowerCase();

    return contacts.some(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  deleteContact = contactKey => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.key !== contactKey
      ),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getfilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalisedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter)
    );
  };

  render() {
    const filterContacts = this.getfilterContacts();
    return (
      <div className="Phonebook_container">
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        {this.state.contacts.length !== 0 && (
          <Filter value={this.state.filter} onChange={this.changeFilter} />
        )}

        <ContactList
          filterContacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
