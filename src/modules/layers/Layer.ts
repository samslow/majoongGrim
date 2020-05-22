export default class Layer {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  angleDegree: number;
  zIndex: number;

  constructor(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    angleDegree: number,
    zIndex: number,
  ) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angleDegree = angleDegree;
    this.zIndex = zIndex;
  }

  move() {
    // 기능 구현
  }

  rotate() {
    // 기능 구현
  }
}
