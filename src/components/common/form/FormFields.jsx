import React from 'react';
import {
  Label,
  StyledInput,
  StyledTextarea,
  StyledSelect,
} from './StyledFormComponents';
import { RadioWrapper } from './StyledFormComponents';
import { StyledRadio } from './StyledFormComponents';
import { Error } from './StyledFormComponents';

export const Input = ({ label = 'Label', error, ...rest }) => (
  <div style={{ marginBottom: '1rem' }}>
    <Label>{label}</Label>
    <StyledInput placeholder={`Enter ${label}`} {...rest} />
    {error && <Error>{error}</Error>}
  </div>
);

export const Textarea = ({ label = 'Label',error, ...rest }) => (
  <div style={{ marginBottom: '1rem' }}>
    <Label>{label}</Label>
    <StyledTextarea {...rest} />
    {error && <Error>{error}</Error>}
  </div>
);

export const Select = ({ label = 'Label',error, options, ...rest }) => (
  <div style={{ marginBottom: '1rem' }}>
    <Label>{label}</Label>
    <StyledSelect {...rest}>
        <option value="" selected disabled>Select {label}</option>
       {options?.map(item=> <option value={item.value}>{item.title}</option>)}
    </StyledSelect>
    {error && <Error>{error}</Error>}
  </div>
);

export const Radio = ({ label = 'Option', name, value, checked, onChange }) => {
  return (
    <RadioWrapper>
      <StyledRadio
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        id={`${value}RadioId`}
      />
      <Label htmlFor={`${value}RadioId`}>{label}</Label>
    </RadioWrapper>
  );
};