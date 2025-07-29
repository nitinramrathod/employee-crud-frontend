import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const StyledInput = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  transition: all .3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 1px 3px rgba(0, 123, 255, 0.425);
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 3px #007bff;
  }
`;

export const StyledSelect = styled.select`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 3px #007bff;
  }
`;


export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 0.5rem;
  label{
    margin-bottom: 3px;
  }
`;

export const Error  = styled.p`
  margin: 0;
  color: red;
  font-size: 13px;
`

export const StyledRadio = styled.input`
  accent-color: #0d6efd; /* Bootstrap primary blue */
  width: 15px;
  height: 15px;
  cursor: pointer;
`;