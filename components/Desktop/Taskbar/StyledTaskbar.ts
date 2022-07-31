import styled from "styled-components";
import { TASKBAR_HEIGHT } from "utils/constants";

const StyledTaskbar = styled.div`
  display: flex;
  position: absolute;

  align-items: center;
  text-align: center;
  justify-content: space-between;

  height: ${TASKBAR_HEIGHT}px;
  width: 100vw;

  background-color: rgba(12, 12, 12, 0.9);
  contain: size layout;

  bottom: 0;
  left: 0;
  right: 0;

  z-index: 5;
`;

export default StyledTaskbar;
