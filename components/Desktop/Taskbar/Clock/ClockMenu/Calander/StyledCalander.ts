import Calendar from "react-calendar";
import styled from "styled-components";

import { PRIMARY_COLOR } from "utils/constants";
import { rgba } from "polished";

const StyledCalander = styled(Calendar)`
  padding-left: 10px;
  padding-right: 10px;

  .react-calendar__navigation {
    display: flex;
    margin-bottom: 10px;

    .react-calendar__navigation__label {
      font-weight: bold;
    }
    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
  }

  .react-calendar__month-view__weekdays__weekday {
    font-weight: bold;
    text-align: center;

    abbr {
      text-decoration: none;
    }
  }

  button {
    margin: 3px;
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    border-radius: 3px;
    color: white;
    padding: 10px 0;
    height: 40px;
    &:hover {
      background-color: ${rgba(PRIMARY_COLOR, 0.3)};

      border-radius: 4px;
      border: 0;
    }
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 14.2%);

    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--range {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0.6;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #dfdfdf;
  }

  .react-calendar__year-view__months {
    display: grid !important;
    grid-template-columns: repeat(5, 20%);
    &.react-calendar__year-view__months {
      grid-template-columns: repeat(3, 33.3%);
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }

  .today {
    background: ${rgba(PRIMARY_COLOR, 0.8)};

    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.7);
  }
`;

export default StyledCalander;
