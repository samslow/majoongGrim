import Layer from "modules/layers/Layer";

export default class TextLayer extends Layer {
  fontType: string;
  fontSize: number;
  color: string;

  constructor(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    zIndex: number,
    angleDegree: number,
    fontType: string,
    fontSize: number,
    color: string,
  ) {
    super(id, x, y, width, height, zIndex, angleDegree);
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
