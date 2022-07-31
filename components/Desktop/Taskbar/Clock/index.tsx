import { useState, useRef } from "react";

import useOutsideClickDetector from "hooks/useOutsideClickDetector";
import StyledClockArea from "./StyledClockArea";
import ClockString from "./ClockString";
import ClockMenu from "./ClockMenu";

export default function Clock() {
  const ClockAreaRef = useRef<HTMLDivElement>(null);

  const [isClockMenuOpen, setIsClockMenuOpen] = useState(false);

  useOutsideClickDetector(ClockAreaRef, () => {
    setIsClockMenuOpen(false);
  });

  return (
    <>
      <StyledClockArea ref={ClockAreaRef}>
        <ClockString onClick={() => setIsClockMenuOpen(!isClockMenuOpen)} />
        {isClockMenuOpen ? <ClockMenu /> : <></>}
      </StyledClockArea>
    </>
  );
}
