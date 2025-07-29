import styled from '@emotion/styled';

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 20px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #0d6efd;
  }

  &:checked + span:before {
    transform: translateX(14.5px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    content: "";
    position: absolute;
    height: 14px; width: 14px;
    left: 3px; bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const ToggleSwitch = ({ isChecked, onToggle }) => {
  return (
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={isChecked} onChange={onToggle} />
      <Slider />
    </SwitchLabel>
  );
};