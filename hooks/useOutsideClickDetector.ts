import { useEffect } from "react";

export default function useOutsideClickDetector(
  ref: React.RefObject<HTMLElement>,
  handler: Function
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) handler();
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
