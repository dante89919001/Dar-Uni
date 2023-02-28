import React, { FormEvent, useEffect, useState } from "react";

import { Controller, useForm, useWatch } from "react-hook-form";
import { PostFormValues } from "../../types/posts";
import { FormInput } from "../ui/form-input/FormInput";

type Props = {
  initialValues?: PostFormValues;
  isLoading: boolean;
  onSubmit: (data: PostFormValues) => void;
};

const defaultValues: PostFormValues = {
  title: "",
  body: "",
  userId: 0,
};

export const PostForm: React.FC<Props> = ({ initialValues, isLoading, onSubmit }) => {
  const {
    // register,
    control,
    handleSubmit,
    formState:{ errors } 
  } = useForm<PostFormValues>({ defaultValues });
  const authorValue = useWatch({ name: "userId", control });

  const handleSuccess = (values: PostFormValues) => {
    onSubmit(values)
  };

  return (
    <form onSubmit={handleSubmit(handleSuccess)}>
      <h3>Post Id: {authorValue}</h3>
      <Controller
        control={control}
        name="title"
        rules={{
          required: true,
          maxLength: {
            value: 10,
            message: "Max length is 10"
          },  pattern: {
            value: /^[A-Za-z]/,
            message: "Name cannot start with a number"
          },
          
         }} 

        render={({ field: { onChange, value, name } }) => (
          <FormInput label="Title" value={value} name={name} onChange={onChange} />
        )}
      />
          {errors.title?.message}
          {errors.title?.type === 'required' && <p role="alert">First name is required</p>}    
        <Controller
        control={control}
        name="body"
        rules={{
          required: true,
          minLength: {
            value: 2,
            message: "Min length is 2"
          }
         }} 
         
        render={({ field: { onChange, value, name } }) => (
          <FormInput label="Body" value={value} name={name} onChange={onChange}  />
        )}
      />
      {<p role="alert">{errors.body?.message}</p>}    
      {errors.title?.type === 'required' && <p role="alert">Body is required</p>}    
      <Controller
        control={control}
        name="userId"
        rules={{
          required: true,
          maxLength: {
            value: 3,
            message: "Max length is 3"
          },
          
          pattern: {
            value: /[0-9]$/,
            message: "Use only number"
          },
          
         }} 
        render={({ field: { onChange, value, name } }) => (
          <FormInput label="User ID" value={`${value}`} name={name} onChange={onChange} />
        )}
      />
      {<p role="alert">{errors.userId?.message}</p>}   
      {errors.userId?.type === 'required' && <p role="alert">userId is required</p>}  
      <button type="submit" disabled={isLoading}>
        Save
      </button>
    </form>
  );
};
