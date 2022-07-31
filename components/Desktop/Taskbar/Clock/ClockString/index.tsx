import StyledClockString from "./StyledClockString";
import useTime from "../useTime";

export default function TimeArea(props: { onClick: () => void }) {
  const timeString = useTime();

  return <StyledClockString {...props}>{timeString}</StyledClockString>;
}
