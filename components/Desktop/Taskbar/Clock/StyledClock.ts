import styled from "styled-components";

const StyledClock = styled.div`
  display: flex;

  color: ${({ theme }) => theme.colors.text};

  align-items: center;
  justify-content: center;

  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.clock.width};
  font-size: ${({ theme }) => theme.sizes.taskbar.clock.fontSize};

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskbar.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.taskbar.active};
  }
`;

export default StyledClock;
