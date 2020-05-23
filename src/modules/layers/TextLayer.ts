import Layer from "modules/layers/Layer";

export default class TextLayer extends Layer {
  fontFamily: string;
  fontType: string;
  fontSize: number;
  color: string;
  content: string;

  constructor(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    zIndex: number,
    angleDegree: number,
    fontFamily: string,
    fontType: string, // bold, italic ...
    fontSize: number,
    color: string,
    content: string,
  ) {
    super(id, x, y, width, height, zIndex, angleDegree);
    this.fontFamily = fontFamily;
    this.fontType = fontType;
    this.fontSize = fontSize;
    this.color = color;
    this.content = content;
  }

  move() {
    // 기능 구현
  }

  rotate() {
    // 기능 구현
  }
}
