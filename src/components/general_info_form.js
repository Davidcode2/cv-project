import React, { Component } from 'react';
import { Input } from './input';
export class GeneralInfoForm extends Component {
  editButtonString = "";

  constructor(props) {
    super(props);
    this.state = { edit: false, firstName: '', lastName: '', DateOfBirth: '', email: '' }
  }

  render() {
    let firstName;
    let lastName;
    let email;
    if (this.state.edit) {
      this.editButtonString = "Save";
      firstName = <input onChange={this.onFirstNameChange} value={this.state.firstName} id="firstName" />
      lastName = <input onChange={this.onLastNameChange} type="text" id="lastName" />
      email = <input onChange={this.onEmailChange} type="text" id="email" />
    } else {
      this.editButtonString = "Edit";
      firstName = <div>{this.state.firstName}</div>
      lastName = <div>{this.state.lastName}</div>
      email = <div>{this.state.email}</div>
    }
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <Input
            value={this.state.firstName}
            label="First Name"
            onChange={this.onFirstNameChange}
            edit={this.state.edit} />
          <Input
            value={this.state.lastName}
            label="Last Name"
            onChange={this.onLastNameChange}
            edit={this.state.edit} />
          <Input
            value={this.state.email}
            label="Email"
            onChange={this.onEmailChange}
            edit={this.state.edit} />
          <button type="submit" onClick={this.toggleMode}>{this.editButtonString}</button>
        </form>
      </div>
    )
  }
