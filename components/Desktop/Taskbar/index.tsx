import StyledTaskbar from "./StyledTaskbar";
import Clock from "./Clock";
import StartButton from "./StartButton";

export default function Taskbar() {
  return (
    <StyledTaskbar>
      <StartButton />
      <Clock />
    </StyledTaskbar>
  );
}
