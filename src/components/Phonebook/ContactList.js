import React from 'react';
import PropTypes from 'prop-types';
import './Phonebook.css';

const ContactList = ({ filterContacts, deleteContact }) => (
  <ul className="ContactList">
    {filterContacts.map(contact => (
      <li className="ContactList_list" key={contact.key}>
        {contact.name}: {contact.number}
        <button onClick={() => deleteContact(contact.key)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
