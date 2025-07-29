import styled from '@emotion/styled'

import { Link} from 'react-router-dom';

const StyledPageHeader  = styled.header`
    background-color: #f5f5f5;
    padding: 6px 25px;
    border-bottom: 1px solid #d6d6d6;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.13);
    display: flex;
    justify-content: space-between;

   a, h2{
        margin: 0;
        font-size: 18px;
        color: #333;
        text-decoration: none;
    }
`;
const MainHeader = () => {
  return (
    <StyledPageHeader>
      <Link to='/'>
      <h2>Employee Management</h2>       
      </Link>
    </StyledPageHeader>
  )
}

export default MainHeader