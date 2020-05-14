export const getArtboardCenterPosition = (width: number, height: number) => {
  const artboard = document.getElementById("artboard");
  let x;
  let y;
  if (artboard !== null) {
    let artboardWidth = artboard.getBoundingClientRect().width;
    let artboardHeight = artboard?.getBoundingClientRect().height;
    let artboardX = artboard.getBoundingClientRect().x;
    let artboardY = artboard?.getBoundingClientRect().y;
    x = artboardX + artboardWidth / 2 - width / 2;
    y = artboardY + artboardHeight / 2 - height / 2;
  } else {
    return [0, 0];
  }

  return [x, y];
};
