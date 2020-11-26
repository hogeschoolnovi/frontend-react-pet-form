import React from 'react';
import { Label } from '../../atoms';

export const Textarea = ({ label, name, fieldRef, value }) => {
  return (
    <div>
      <Label name={name}>{label}</Label>
      <textarea ref={fieldRef} name={name} id={name} />
    </div>
  );
};
