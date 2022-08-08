import styled from "styled-components";

const StyledTaskbar = styled.div`
  display: flex;
  position: absolute;

  align-items: center;
  text-align: center;
  justify-content: space-between;

  height: ${({ theme }) => theme.sizes.taskbar.height};
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.taskbar.background};

  bottom: 0;
  left: 0;
  right: 0;
`;

export default StyledTaskbar;
