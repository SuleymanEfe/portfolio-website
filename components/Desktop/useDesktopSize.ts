import { useEffect, useState } from "react";
import { TASKBAR_HEIGHT } from "utils/constants";

const useDesktopSize = () => {
  const [desktopDimensions, setDesktopDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setDesktopDimensions({
        width: window.innerWidth,
        height: window.innerHeight - TASKBAR_HEIGHT,
      });
    };

    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return desktopDimensions;
};

export default useDesktopSize;
