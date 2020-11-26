import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Label, ErrorMessage } from '../../atoms';

export const RadioGroup = ({ label, name, children }) => {
  const { errors } = useFormContext();
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {errors[name] && <ErrorMessage>{errors[name].message}</ErrorMessage>}
    </div>
  );
};
