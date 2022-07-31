export const PRIMARY_COLOR = "rgb(255, 117, 24)";

export const TASKBAR_HEIGHT = 30;

export const CLOCK_MENU_WIDTH = `20rem`;
export const CLOCK_MENU_HEIGHT = `30rem`;

export const CLOCK_MENU_TIME_STRING_HEIGHT = `5rem`;

export const CLOCK_MENU_CANVAS_WIDTH = `100%`;
export const CLOCK_MENU_CANVAS_HEIGHT = `${
  Number(CLOCK_MENU_HEIGHT.split("rem")[0]) -
  Number(CLOCK_MENU_TIME_STRING_HEIGHT.split("rem")[0])
}rem`;
