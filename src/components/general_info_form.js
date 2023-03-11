import React, { useState } from 'react';
import { Input } from './input';
export function GeneralInfoForm() {
  const [editButtonString, setEditButtonString] = useState('Edit');
  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');

  let submitForm = (e) => {
    e.preventDefault();
  };

  let onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  let onLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  let onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  let onDateOfBirthChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const toggleMode = () => {
    console.log(editButtonString);
    if (edit) {
    console.log("true", editButtonString);
      setEditButtonString( 'Edit');
      setEdit(false);
    } else {
    console.log("else", editButtonString);
      setEditButtonString( 'Save');
      setEdit(true);
    }
    return view;
  };

  let view = (
    <div>
      <form
        className="formSection flex-row space-between"
        onSubmit={submitForm}
      >
        <div>
          <Input
            value={firstName}
            label="First Name"
            onChange={onFirstNameChange}
            edit={edit}
          />
          <Input
            value={lastName}
            label="Last Name"
            onChange={onLastNameChange}
            edit={edit}
          />
          <Input
            value={email}
            label="Email"
            onChange={onEmailChange}
            edit={edit}
          />
          <Input
            value={dateOfBirth}
            label="Date of Birth"
            onChange={onDateOfBirthChange}
            edit={edit}
          />
        </div>
        <button className="ma-1 align-end" type="submit" onClick={toggleMode}>
          {editButtonString}
        </button>
      </form>
    </div>
  );
  return view;
}
