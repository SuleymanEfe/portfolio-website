import styled from "styled-components";

const StyledTaskbar = styled.div`
  display: flex;
  position: absolute;

  align-items: center;
  text-align: center;
  justify-content: space-between;

  height: 30px;
  width: 100vw;

  background-color: #191919;
  contain: size layout;

  bottom: 0;
  left: 0;
  right: 0;

  z-index: 5;
`;

export default StyledTaskbar;
