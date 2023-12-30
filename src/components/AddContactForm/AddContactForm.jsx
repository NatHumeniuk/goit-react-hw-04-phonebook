import React, { useState } from 'react';
import css from '../AddContactForm/AddContactForm.module.css';

export const AddContactForm = ({ handleAddContact }) => {
  const [contactName, setContactName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();

    const formData = {
      name: contactName,
      number: phoneNumber,
    };

    handleAddContact(formData);
    setContactName();
    setPhoneNumber();
    event.currentTarget.reset();
  };
  const handleNameChange = event => {
    setContactName(event.target.value);
  };

  const handleNumberChange = event => {
    setPhoneNumber(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.formContact}>
      <label className={css.formLabel}>
        <span className={css.inputTitle}>Name:</span>
        <input
          className={css.formInput}
          type="text"
          placeholder="John Smith"
          name="contactName"
          onChange={handleNameChange}
          required
        />
      </label>
      <label className={css.formLabel}>
        <span className={css.inputTitle}>Number:</span>
        <input
          className={css.formInput}
          type="tel"
          name="phoneNumber"
          placeholder="548-48-48"
          pattern="\d{3}-\d{2}-\d{2}"
          onChange={handleNumberChange}
          required
        />
      </label>

      <button type="submit" className={css.submitBtn}>
        Add contact
      </button>
    </form>
  );
};
