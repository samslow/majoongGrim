import Layer from "./Layer";

export default class ImageLayer extends Layer {
  image: HTMLImageElement;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    zIndex: number,
    angleDegree: number,
    image: HTMLImageElement,
  ) {
    super(x, y, width, height, zIndex, angleDegree);
    this.image = image;
  }

  move() {
    // 기능 구현
  }

  rotate() {
    // 기능 구현
  }
}
