import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Label, Input, ErrorMessage } from '../../atoms';

export const CheckboxInput = ({ label, name, fieldRef, value }) => {
  const { errors } = useFormContext();

  return (
    <div>
      <Input type="checkbox" fieldRef={fieldRef} name={name} value={value} />
      <Label name={name}>{label}</Label>
      {errors[name] && (
        <ErrorMessage>{errors[name].message || "Error"}</ErrorMessage>
      )}
    </div>
  );
};
