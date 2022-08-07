import styled from "styled-components";

const StyledClockArea = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 80px;
  font-size: 0.8rem;
  color: #fff;

  &:hover {
    cursor: pointer;
    background-color: rgba(210, 210, 210, 0.1);
  }
`;

export default StyledClockArea;
