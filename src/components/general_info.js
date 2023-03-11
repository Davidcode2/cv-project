import React from 'react';
import { GeneralInfoForm } from './general_info_form';
export function GeneralInfo() {
  let entries = [
    { value: 'First Name', type: 'text' },
    { value: 'Last Name', type: 'text' },
    { value: 'E-Mail', type: 'email' },
    { value: 'Date of Birth', type: 'date' },
    { value: 'Birthplace', type: 'text' },
  ];

  return (
    <div>
      <GeneralInfoForm entries={entries} />
    </div>
  );
}
