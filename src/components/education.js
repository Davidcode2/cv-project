import '../styles/style.css';
import React, { Component } from 'react';

export class Education extends Component {
  editButtonString = "";

  constructor(props) {
    super(props);
    this.state = { edit: false, firstName: '', lastName: '', DateOfBirth: '' }
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  onFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value });
    console.log(this.state);
  }

  onLastNameChange = (e) => {
    this.setState({ lastName: e.target.value });
    console.log(this.state);
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
      return (
        <div>
          <form onSubmit={this.submitForm}>
            <div className="flex-column ma-1">
              <label htmlFor="name">First Name:</label>
              <input onChange={this.onFirstNameChange} value={this.state.firstName} id="firstName" />
            </div>
            <div className="flex-column ma-1">
              <label htmlFor="lastName">Last Name:</label>
              <input onChange={this.onLastNameChange} type="text" id="lastName" />
            </div>
            <button type="submit" onClick={this.toggleMode}>{this.editButtonString}</button>
          </form>
        </div>
      )
    } else {
      this.editButtonString = "Edit";
      return (
        <div>
          <div className="flex-column ma-1">
            <label htmlFor="name">First Name:</label>
            <div>{this.state.firstName}</div>
          </div>
          <div className="flex-column ma-1">
            <label htmlFor="lastName">Last Name:</label>
            <div>{this.state.lastName}</div>
          </div>
          <button type="submit" onClick={this.toggleMode}>{this.editButtonString}</button>
        </div>
      )
    }
  }

}
