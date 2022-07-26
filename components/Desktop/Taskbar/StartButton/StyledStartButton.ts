import styled from "styled-components";

const StyledStartButton = styled.button`
  display: flex;

  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};

  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.startButton.width};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.taskbar.active};
  }
`;

export default StyledStartButton;
