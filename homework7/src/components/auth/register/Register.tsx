import React, { FormEvent, useRef, useState } from 'react';
import { RegisterFormData } from '../../../types';
import { FormInput } from '../../ui/form-input/FormInput';

import './Register.css';

const initialFormData: RegisterFormData = {
  firstName: '',
  lastName: '',
};

export const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>(initialFormData);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    console.log('Form submitted');
    console.log(inputRef.current?.value);
  };

  const handleFormChange = (fieldName: keyof RegisterFormData) => {
    return (value: string) => {
      setFormData((v) => ({
        ...v,
        [fieldName]: value,
      }));
    };
  };

  console.log('Rerendered');

  return (
    <form className="Register__form" onSubmit={handleSubmit}>
      <FormInput
        label={'First name'}
        name="firstName"
        onChange={handleFormChange('firstName')}
        value={formData.firstName}
      />
      <FormInput
        label={'Last name'}
        name="lastName"
        onChange={handleFormChange('lastName')}
        value={formData.lastName}
      />
      <input name="test1" ref={inputRef} />
      <button type="submit">Save</button>
    </form>
  );
};
