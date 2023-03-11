import React from 'react';
import { GeneralInfoForm } from './general_info_form';
export function GeneralInfo() {

  let entries = [
    'First Name',
    'Last Name',
    'E-Mail',
    'Date of Birth',
    'Birthplace',
  ];

    return (
      <div>
        <GeneralInfoForm entries={entries} />
      </div>
    )

}
