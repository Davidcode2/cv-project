import React, { Component } from 'react';
import { Input } from './input';
export class GeneralInfoForm extends Component {
  editButtonString = "";

  constructor(props) {
    super(props);
    this.state = { edit: false, firstName: '', lastName: '', dateOfBirth: '', email: '' }
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  onFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
  }

  onLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
  }

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }

  onDateOfBirthChange = (e) => {
    this.setState({ dateOfBirth: e.target.value });
  }

  toggleMode = () => {
    if (this.state.edit) {
      this.setState({ edit: false });
      this.render();
    } else {
      this.setState({ edit: true });
      this.render();
    }
  }

  render() {
    if (this.state.edit) {
      this.editButtonString = "Save";
    } else {
      this.editButtonString = "Edit";
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
          <Input
            value={this.state.dateOfBirth}
            label="Date of Birth"
            onChange={this.onDateOfBirthChange}
            edit={this.state.edit} />
          <button type="submit" onClick={this.toggleMode}>{this.editButtonString}</button>
        </form>
      </div>
    )
  }
}
