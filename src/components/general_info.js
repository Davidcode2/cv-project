import React, { Component } from 'react';
import { Input } from './input';
import { GeneralInfoForm } from './general_info_form';
export class GeneralInfo extends Component {
  editButtonString = "";

  constructor(props) {
    super(props);
    this.state = { edit: false, firstName: '', lastName: '', DateOfBirth: '', email: '' }
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
        <GeneralInfoForm render={({ editable, value, onChange, id }) => {
          editable
            ? <input value={value} onChange={onChange} type="text" id={id} />
            : <div>{value}</div>
          }
        } />
      </div>
    )
  }

}
