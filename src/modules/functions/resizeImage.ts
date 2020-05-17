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

  // 이미지가 아트보드 가로,세로보다 작을 경우, 원본 사이즈로 리턴
  if (width < MAX_WIDTH && height < MAX_HEIGHT) {
    return [width, height];
  }

  // 아트보드 가로세로 비율
  const artboardRatio = MAX_WIDTH / MAX_HEIGHT;
  // 이미지 가로세로 비율
  const imageRatio = width / height;

  // 아트보드 비율이 이미지 비율보다 크면 이미지의 세로를 아트보드의 세로에 맞춤
  if (artboardRatio > imageRatio) {
    width *= MAX_HEIGHT / height;
    height = MAX_HEIGHT;
  }
  // 이미지 비율이 아트보드 비율보다 크면 이미지의 가로를 아트보드의 가로에 맞춤
  else {
    height *= MAX_WIDTH / width;
    width = MAX_WIDTH;
  }
  return [width, height];
};
