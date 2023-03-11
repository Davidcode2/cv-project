import React, { useState } from 'react';
import { Input } from './input';
export function GeneralInfoForm(props) {
  const { entries } = props;
  const [editButtonString, setEditButtonString] = useState('Edit');
  const [edit, setEdit] = useState(false);

  let submitForm = (e) => {
    e.preventDefault();
  };
  const toggleMode = () => {
    if (edit) {
      setEditButtonString('Edit');
      setEdit(false);
    } else {
      setEditButtonString('Save');
      setEdit(true);
    }
    return view;
  };

  let items = entries.map((entry, i) => {
    return <Input type={entry.type} key={i} label={entry.value} edit={edit} />;
  });

  let view = (
    <div>
      <form
        className="formSection flex-row space-between"
        onSubmit={submitForm}
      >
        <div>{items}</div>
        <button className="ma-1 align-end" type="submit" onClick={toggleMode}>
          {editButtonString}
        </button>
      </form>
    </div>
  );
  return view;
}
