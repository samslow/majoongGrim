import Layer from "modules/layers/Layer";

export default class ShapeLayer extends Layer {
  shapeStyle: string;
  color: string;

  constructor(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    zIndex: number,
    angleDegree: number,
    shapeStyle: string,
    color: string,
  ) {
    super(id, x, y, width, height, zIndex, angleDegree);
    this.shapeStyle = shapeStyle;
    this.color = color;
  }

  move() {
    // 기능 구현
  }

  rotate() {
    // 기능 구현
  }
}
