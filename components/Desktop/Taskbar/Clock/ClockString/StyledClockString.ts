import styled from "styled-components";

const ClockString = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(210, 210, 210, 0.1);
  }
`;

export default ClockString;
