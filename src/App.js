import { GeneralInfo } from './components/general_info';
import { Education } from './components/education';
import { PracticalExperience } from './components/practical_experience';
import React, { useState } from 'react';
import './App.css';
import './styles/style.css';

function App() {
  const [experienceCount, setExperienceCount] = useState(1);
  let experienceContainer = [];
  let addExperience = () => {
    setExperienceCount(experienceCount + 1);
  };
  let removeExperience = () => {
    setExperienceCount(experienceCount - 1);
  };
  for (let i = 0; i < experienceCount; i++) {
    experienceContainer.push(
      <div key={i}>
        <PracticalExperience />
      </div>
    );
  }
  return (
    <div>
      <GeneralInfo />
      {experienceContainer}
      <div className="flex-row justify-content-end">
        <button className="ma-1" onClick={addExperience}>Add Experience</button>
        <button className="ma-1" onClick={removeExperience}>Remove Experience</button>
      </div>
    </div>
  );
}

export default App;
