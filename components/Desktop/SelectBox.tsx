import { useEffect, useState, useRef } from "react";
import useDesktopSize from "./useDesktopSize";

type SelectBoxInfo = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export default function SelectBox() {
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [isSelected, setIsSelected] = useState(false);

  const canvas = useRef<HTMLCanvasElement | null>(null);

  const desktopDimensions = useDesktopSize();

  useEffect(() => {
    if (canvas.current) {
      canvas.current.width = desktopDimensions.width;
      canvas.current.height = desktopDimensions.height;
    }
  }, [desktopDimensions, canvas]);

  useEffect(() => {
    const clearCanvas = () => {
      if (!context) return;

      const canvasHeight = canvas.current?.height || 0;
      const canvasWidth = canvas.current?.width || 0;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
    };

    const handleWindowMouseDown = (event: MouseEvent) => {
      if (event.target != canvas.current) return;

      setIsSelected(true);
      setInitialPos({ x: event.clientX, y: event.clientY });
    };

    const handleWindowMouseUp = (event: MouseEvent) => {
      setIsSelected(false);
      clearCanvas();
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isSelected) return;

      if (event.buttons === 1) {
        clearCanvas();

        const selectBoxInfo: SelectBoxInfo = {
          x: initialPos.x,
          y: initialPos.y,
          w: event.clientX - initialPos.x,
          h: event.clientY - initialPos.y,
        };

        drawSelectBox(selectBoxInfo);
      }
    };

    window.addEventListener("mousedown", handleWindowMouseDown);
    window.addEventListener("mouseup", handleWindowMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleWindowMouseDown);
      window.removeEventListener("mouseup", handleWindowMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [initialPos, isSelected]);

  useEffect(() => {
    const canvasEle: any = canvas.current;

    canvasEle.width = desktopDimensions.width;
    canvasEle.height = desktopDimensions.height;

    setContext(canvasEle.getContext("2d"));
  }, []);

  const drawSelectBox = (selectBoxInfo: SelectBoxInfo) => {
    if (!context) return;

    const { x, y, w, h } = selectBoxInfo;

    context.fillStyle = "rgba(200, 200, 200, .2)";
    context.fillRect(x, y, w, h); //for white background
    context.globalCompositeOperation = "source-over";
    context.lineWidth = 2;
    context.strokeStyle = "rgba(182, 182, 182, 1)";
    context.strokeRect(x, y, w, h); //for white background
  };

  return <canvas ref={canvas}></canvas>;
}
