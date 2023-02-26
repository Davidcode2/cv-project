import '../styles/style.css';
import React, { Component } from 'react';

export class Education extends Component {
  editButtonString = "";

  constructor(props) {
    super(props);
    this.state = { edit: false, firstName: '', lastName: '', DateOfBirth: '', email: '' }
  }

  submitForm = (e) => {
    e.preventDefault();
  }

  render() {
    return <div>education works</div>
  }
}
