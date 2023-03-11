import React, { useState } from 'react';
export function Input(props) {
  const [value, setValue] = useState('');
  let onChange = (e) => {
    setValue(e.target.value);
  };
  const { edit, label, type } = props;
  let output = edit ? (
    <input type={type} className="ma-l-auto" onChange={onChange} value={value} id={label} />
  ) : (
    <div>{value}</div>
  );
  return (
    <div className="flex-row ma-1">
      <label htmlFor={label} className="mr-05 mr-r-auto">
        {label}
      </label>
      {output}
    </div>
  );
}
