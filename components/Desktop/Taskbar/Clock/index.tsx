import StyledClock from "./StyledClock";
import useTime from "hooks/useTime";

export default function Clock() {
  const timeString = useTime();

  return <StyledClock>{timeString}</StyledClock>;
}
