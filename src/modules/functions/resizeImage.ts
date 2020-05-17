export const resizeImage = (image: HTMLImageElement, nowShape: string) => {
  let MAX_WIDTH: number;
  let MAX_HEIGHT: number;
  let width = image.width;
  let height = image.height;

  if (nowShape === "HORIZONTAL_SHAPE") {
    MAX_WIDTH = 480;
    MAX_HEIGHT = 280;
  } else if (nowShape === "VERTICAL_SHAPE") {
    MAX_WIDTH = 280;
    MAX_HEIGHT = 400;
  } else {
    MAX_WIDTH = 280;
    MAX_HEIGHT = 280;
  }

  if (width < MAX_WIDTH && height < MAX_HEIGHT) {
    return [width, height];
  }

  const artboardRatio = MAX_WIDTH / MAX_HEIGHT;
  const imageRatio = width / height;

  if (artboardRatio > imageRatio) {
    width *= MAX_HEIGHT / height;
    height = MAX_HEIGHT;
  } else {
    height *= MAX_WIDTH / width;
    width = MAX_WIDTH;
  }
  return [width, height];
};
