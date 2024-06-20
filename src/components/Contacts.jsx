import React from "react";
import PropTypes from "prop-types";



function Contacts ({handleChange, handleChange2, handleSubmit }){
  return(
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          pattern="\+?[0-9]{1,4}[-.\s]?\(?[0-9]{1,3}\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label>Phone</label>
        <input
          onChange={handleChange2}
          type="tel"
          name="number"
          pattern="\+?[0-9]{1,4}[-.\s]?\(?[0-9]{1,3}\)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}"
          title="Phone number may contain only digits"
          required
        />
      <button type='submit'>Add contact</button>

      </form>
      </>
  )
}

Contacts.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleChange2: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Contacts;