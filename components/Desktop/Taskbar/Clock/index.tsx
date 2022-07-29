import StyledClock from "./StyledClock";
import useTime from "./useTime";

export default function Clock() {
  const timeString = useTime();

  const onClickHandler = () => {
    console.log("Clicked to clock.");
    //TODO: Open clock menu
  };
  return (
    <>
      <StyledClock onClick={onClickHandler}>
        {timeString ? <span>{timeString}</span> : <></>}
      </StyledClock>
    </>
  );
}
