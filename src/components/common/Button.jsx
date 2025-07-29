import styled from "@emotion/styled";

const StyledButton = styled.button`
  padding: 7px 13px;
  display: flex;
  gap: 5px;
  align-items: center;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Button = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
};
export default Button;