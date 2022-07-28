import styled from "styled-components";

const StyledClock = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100%;
  width: 80px;
  font-size: 0.9rem;
  color: #fff;
  margin-left: auto;
  margin-right: 1.5rem;

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(183, 183, 183, 0.39);
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export default StyledClock;
