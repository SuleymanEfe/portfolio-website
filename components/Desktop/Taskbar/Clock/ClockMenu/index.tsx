import StyledClockMenu from "./StyledClockMenu";
import StyledCalander from "./Calander/";
import useTime from "../useTime";

export default function Clock() {
  const timeString = useTime();

  return (
    <StyledClockMenu>
      <div className="time-string">{timeString}</div>
      <StyledCalander />
    </StyledClockMenu>
  );
}
