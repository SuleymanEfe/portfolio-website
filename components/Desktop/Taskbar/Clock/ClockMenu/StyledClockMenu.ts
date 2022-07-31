import styled from "styled-components";

import {
  CLOCK_MENU_HEIGHT,
  CLOCK_MENU_WIDTH,
  PRIMARY_COLOR,
} from "utils/constants";

const StyledClock = styled.div`
  display: relative;
  position: absolute;

  background-color: rgba(15, 15, 15, 0.6);

  justify-content: center;

  max-height: ${CLOCK_MENU_HEIGHT}px;
  min-height: ${CLOCK_MENU_HEIGHT}px;
  height: ${CLOCK_MENU_HEIGHT};

  max-width: ${CLOCK_MENU_WIDTH};
  width: 100%;

  top: -${CLOCK_MENU_HEIGHT};
  right: 0rem;

  border-top: 1px solid ${PRIMARY_COLOR};
  border-left: 1px solid ${PRIMARY_COLOR};

  border-bottom: none;
  border-right: none;

  .time-string {
    display: flex;
    height: 4rem;
    width: 100%;

    justify-content: left;
    align-items: center;
    font-size: 2rem;
    padding: 1rem;
  }
`;

export default StyledClock;
