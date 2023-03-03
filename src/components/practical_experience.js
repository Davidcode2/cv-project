import { Input } from './input';
import React, { Component } from 'react';
export class PracticalExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      jobTitle: '',
      keySkills: '',
      from: '',
      to: '',
    };
  }

  submitForm = (e) => {
    e.preventDefault();
  };

  onJobTitleChange = (e) => {
    this.setState({ jobTitle: e.target.value });
  };

  onKeySkillsChange = (e) => {
    this.setState({ keySkills: e.target.value });
  };

  onFromChange = (e) => {
    this.setState({ from: e.target.value });
  };

  onToChange = (e) => {
    this.setState({ to: e.target.value });
  };

  toggleMode = () => {
    if (this.state.edit) {
      this.setState({ edit: false });
      this.render();
    } else {
      this.setState({ edit: true });
      this.render();
    }
  };

  render() {
    if (this.state.edit) {
      this.editButtonString = 'Save';
    } else {
      this.editButtonString = 'Edit';
    }
    return (
      <div>
        <form className="formSection flex-row space-between" onSubmit={this.submitForm}>
          <div>
            <Input
              value={this.state.jobTitle}
              label="Job Title"
              onChange={this.onJobTitleChange}
              edit={this.state.edit}
            />
            <Input
              value={this.state.keySkills}
              label="Key Skills"
              onChange={this.onKeySkillsChange}
              edit={this.state.edit}
            />
            <Input
              value={this.state.from}
              label="From"
              onChange={this.onFromChange}
              edit={this.state.edit}
            />
            <Input
              value={this.state.to}
              label="To"
              onChange={this.onToChange}
              edit={this.state.edit}
            />
          </div>
          <button className="button align-end ma-1" type="submit" onClick={this.toggleMode}>
            {this.editButtonString}
          </button>
        </form>
      </div>
    );
  }
}
