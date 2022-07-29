import styled from "styled-components";

const StyledClock = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 80px;
  font-size: 0.9rem;
  color: #fff;

  margin-right: 1.5rem;

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(183, 183, 183, 0.39);
  }
`;

export default StyledClock;
