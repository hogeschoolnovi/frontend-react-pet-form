import React from 'react';

export const Input = ({ type, fieldRef, name, id, value }) => (
  <input
    type={type}
    ref={fieldRef}
    name={name}
    id={id || name}
    value={value}
  />
);
