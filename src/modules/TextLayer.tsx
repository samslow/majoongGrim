import Layer from "./Layer";

export default class TextLayer extends Layer {
  fontType: string;
  fontSize: string;
  color: string;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    zIndex: number,
    angleDegree: number,
    fontType: string,
    fontSize: string,
    color: string,
  ) {
    super(x, y, width, height, zIndex, angleDegree);
    this.fontType = fontType;
    this.fontSize = fontSize;
    this.color = color;
  }

  move() {
    // 기능 구현
  }

  rotate() {
    // 기능 구현
  }
}
