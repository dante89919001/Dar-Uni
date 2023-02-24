import React, { FormEvent, useState } from 'react';
import { PostFormValues } from '../../../types/posts';
import { FormInput } from '../../ui/form-input/FormInput';

type Props = {
  initialValues?: PostFormValues;
  isLoading: boolean;
  onSubmit: (data: PostFormValues) => void;
};

const initialValuesDefault: PostFormValues = {
  title: '',
  body: '',
  userId: 0,
};

export const PostForm: React.FC<Props> = ({
  initialValues,
  isLoading,
  onSubmit,
}) => {
  const [formValues, setFormValues] = useState<PostFormValues>(
    initialValues || initialValuesDefault
  );
  const [error, setError] = useState('');

  const handleFormChange = (fieldName: keyof PostFormValues) => {
    return (value: string) => {
      setFormValues((v) => ({
        ...v,
        [fieldName]: value,
      }));
    };
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setError('');

    if (!formValues.title) {
      setError('Title is required');
      return;
    }

    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        name="title"
        label="Title"
        value={formValues?.title}
        onChange={handleFormChange('title')}
      />
      <FormInput
        name="body"
        label="Text"
        value={formValues?.body}
        onChange={handleFormChange('body')}
      />
      <FormInput
        name="body"
        label="User"
        value={`${formValues?.userId}`}
        onChange={handleFormChange('userId')}
      />
      {error && <div>{error}</div>}
      <button type="submit" disabled={isLoading}>
        Save
      </button>
    </form>
  );
};
