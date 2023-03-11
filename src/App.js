import { FormCreator } from './components/form_creator';
import React, { useState } from 'react';
import './App.css';
import './styles/style.css';

function App() {
  const [experienceCount, setExperienceCount] = useState(1);
  const [skillCount, setSkillCount] = useState(1);

  let practicalExperience = [
    { value: 'Job Title', type: 'text' },
    { value: 'Key Skills', type: 'text' },
    { value: 'From', type: 'date' },
    { value: 'To', type: 'date' },
  ];

  let generalInfo = [
    { value: 'First Name', type: 'text' },
    { value: 'Last Name', type: 'text' },
    { value: 'E-Mail', type: 'email' },
    { value: 'Date of Birth', type: 'date' },
    { value: 'Birthplace', type: 'text' },
  ];

  let skills = [{ value: '', type: 'text' }];

  let experienceContainer = [];
  let addExperience = () => {
    setExperienceCount(experienceCount + 1);
  };
  let removeExperience = () => {
    if (experienceCount > 0) {
      setExperienceCount(experienceCount - 1);
    }
  };

  let skillContainer = [];
  let addSkill = () => {
    setSkillCount(skillCount + 1);
  };
  let removeSkill = () => {
    if (skillCount > 0) {
      setSkillCount(skillCount - 1);
    }
  };
  for (let i = 0; i < skillCount; i++) {
    skillContainer.push(
      <div key={i}>
        <FormCreator entries={skills} />
      </div>
    );
  }
  for (let i = 0; i < experienceCount; i++) {
    experienceContainer.push(
      <div key={i}>
        <h2 className="ma-1">Experience</h2>
        <FormCreator entries={practicalExperience} />
        <h3 className="ma-1">Skills</h3>
        {skillContainer}
        <div className="flex-row justify-content-end">
          <button className="ma-1" onClick={addSkill}>
            Add Skill
          </button>
          <button className="ma-1" onClick={removeSkill}>
            Remove Skill
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="ma-1">Personal Info</h1>
      <FormCreator entries={generalInfo} />
      {experienceContainer}
      <div className="flex-row justify-content-end">
        <button className="ma-1" onClick={addExperience}>
          Add Experience
        </button>
        <button className="ma-1" onClick={removeExperience}>
          Remove Experience
        </button>
      </div>
    </div>
  );
}

export default App;
