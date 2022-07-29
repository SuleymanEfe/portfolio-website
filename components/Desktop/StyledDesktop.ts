import styled from "styled-components";

const StyledDesktop = styled.main`
  background: rgb(14, 51, 171);
  background: linear-gradient(
    45deg,
    rgba(14, 51, 171, 1) 0%,
    rgba(144, 14, 171, 1) 20%,
    rgba(171, 14, 72, 1) 40%,
    rgba(171, 60, 14, 1) 60%,
    rgba(151, 171, 14, 1) 80%,
    rgba(0, 212, 255, 1) 100%
  );
  background-position: center;
  contain: strict;
  height: 100%;
  inset: 0;
  width: 100vw;
  position: fixed;
`;

export default StyledDesktop;
