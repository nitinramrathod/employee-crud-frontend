import styled from '@emotion/styled'
import React from 'react'
import Button from './Button'
import { plus_icon } from '../../assets/icons/form';
import { Link} from 'react-router-dom';

const StyledPageHeader  = styled.header`
    padding-bottom: 13px;
    border-bottom: 1px solid #d6d6d6;
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        margin: 0;
        font-size: 22px;
        color: #248beb;
    }
`;

const RightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const PageHeader = ({
  title = "Employee List",
  buttonProps ={
    text: "Add Employee",
    icon: plus_icon,
    url: '/employee/create'
  }
}) => {
  return (
    <StyledPageHeader>
      <h2>{title}</h2>
        <RightWrapper>
           <Link style={{ textDecoration: 'none' }} to={buttonProps?.url}> <Button> {buttonProps?.icon}{buttonProps?.text}</Button></Link>
        </RightWrapper>
    </StyledPageHeader>
  )
}

export default PageHeader