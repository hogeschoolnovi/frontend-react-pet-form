import React from 'react';
import { Label, Input } from '../../atoms';

export const RadioInput = ({ label, name, fieldRef, value }) => {
  return (
    <div>
      <Input type="radio" fieldRef={fieldRef} name={name} value={value} id={`${name}-${value}`} />
      <Label name={`${name}-${value}`}>{label}</Label>
    </div>
  );
};
