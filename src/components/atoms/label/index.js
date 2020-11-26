import React from 'react';

export const Label = ({ children, name }) => (
  <label style={{ fontWeight: 600 }} htmlFor={name}>
    {children}
  </label>
);
