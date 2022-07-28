import styled from "styled-components";

const StyledStartButton = styled.button`
  display: flex;

  align-items: center;
  text-align: center;
  justify-content: center;

  height: 100%;
  width: 50px;
  margin-left: 1.5rem;

  transition: background 0.2s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba(195, 195, 195, 1);
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`;

export default StyledStartButton;
