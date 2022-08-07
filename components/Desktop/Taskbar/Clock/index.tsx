import StyledClockArea from "./StyledClockArea";
import useTime from "./useTime";

export default function Clock() {
  const timeString = useTime();

  return <StyledClockArea>{timeString}</StyledClockArea>;
}
