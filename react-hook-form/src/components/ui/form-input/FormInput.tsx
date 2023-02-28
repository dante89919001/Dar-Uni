import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';

import './FormInput.css';

type Props = {
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (v: ChangeEvent) => void;

};

export const FormInput: React.FC<Props> = ({
  label,
  name,
  type,
  onChange,
  value,
  placeholder,
}) => {
  return (
    <div className="FormInput__formControl">
      <label className="FormInput__label">{label}</label>
      <input
        placeholder={placeholder}
        className="FormInput__input"
        name={name}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
