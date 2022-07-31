import moment from "moment";
import StyledCalander from "./StyledCalander";

export default function Clock() {
  return (
    <StyledCalander
      defaultView="month"
      minDetail={"year"}
      tileClassName={({ date }) => {
        if (moment(date).isSame(moment(), "day")) return "today";
        return "";
      }}
    />
  );
}
