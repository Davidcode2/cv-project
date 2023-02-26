import React, { Component } from 'react';
export class Input extends Component {
  editButtonString = "";

  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName: '', DateOfBirth: '', email: '' }
  }

  render() {
    const { edit, label, value, onChange } = this.props;
    let output = edit
      ? <input onChange={onChange} value={value} id={label} />
      : <div>{value}</div>
    return (
      <div className="flex-column ma-1">
        <label htmlFor={label} className="mr-05">{label}:</label>
        {output}
      </div>
    )
  }
}
