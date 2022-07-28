import { useEffect, useState } from "react";
import StyledClock from "./StyledClock";

function SecondsProgressBar({ percentage }: { percentage: number }) {
  const containerStyles = {
    height: "2px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: "#ff0000",
    borderRadius: "inherit",
    textAlign: "center" as "center",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles} />
    </div>
  );
}

export default function Clock() {
  const [time, setTime] = useState("");
  const [fullTime, setFullTime] = useState("");

  const [progressBarPercentage, setProgressBarPercentage] = useState(0);

  useEffect(() => {
    setInterval(() => {
      var current = new Date();
      var hours = current.getHours();
      var minutes = current.getMinutes();
      var seconds = current.getSeconds();
      var milliseconds = current.getMilliseconds();

      var ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;

      var strMinutes = minutes < 10 ? "0" + minutes : minutes;

      var strTime = hours + ":" + strMinutes + " " + ampm;
      var strFullTime = hours + ":" + strMinutes + ":" + seconds + " " + ampm;

      setProgressBarPercentage(seconds / 0.6 + milliseconds / 1000);
      setTime(strTime);
      setFullTime(strFullTime);
    }, 17);
  }, []);

  const onClickHandler = () => {
    navigator.clipboard.writeText(fullTime);
  };
  return (
    <StyledClock onClick={onClickHandler}>
      {time != "" ? (
        <div>
          <span>{time}</span>
          <SecondsProgressBar percentage={progressBarPercentage} />
        </div>
      ) : (
        <></>
      )}
    </StyledClock>
  );
}
