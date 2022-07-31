import { useEffect, useState } from "react";

const useTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleTime = () => {
      var current = new Date();
      var hours = current.getHours();
      var minutes = current.getMinutes();
      var seconds = current.getSeconds();

      var ampm = hours >= 12 ? "PM" : "AM";

      hours = hours % 12;
      hours = hours ? hours : 12;

      var strSeconds = seconds < 10 ? "0" + seconds : seconds;
      var strMinutes = minutes < 10 ? "0" + minutes : minutes;

      var strTime = hours + ":" + strMinutes + ":" + strSeconds + " " + ampm;

      setTime(strTime);
    };
    handleTime();

    const interval = setInterval(() => handleTime(), 17);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
};

export default useTime;
