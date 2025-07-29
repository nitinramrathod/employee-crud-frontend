import styled from '@emotion/styled'
import React from 'react'

const InputWrapper = styled.div`
margin-bottom: 10px;
width: 100%;
input{
    padding: 10px 20px;
    background: #ffffff;
    border-radius: 7px;
    outline: none;
    border: 1px solid rgb(78, 78, 78);

    &:focus{
        box-shadow: 0 0 0 3px rgba(26, 163, 255, 0.425);
        border-color: rgb(8, 130, 211);
    }
}
    
`
const GlobalSearch = ({...props}) => {
  return (
    <InputWrapper>
        <input type="text"  {...props}  />
    </InputWrapper>
  )
}

export default GlobalSearch