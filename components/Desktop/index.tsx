import StyledDesktop from "./StyledDesktop";
import Taskbar from "./Taskbar";
import SelectBox from "./SelectBox";

export default function Desktop() {
  return (
    <StyledDesktop>
      <SelectBox />
      <Taskbar />
    </StyledDesktop>
  );
}
