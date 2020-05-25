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

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  rotate(angleDegree: number) {
    this.angleDegree = angleDegree;
  }

  // 캔버스에 레이어를 그리는 메소드
  draw(ctx: CanvasRenderingContext2D, ARTBOARD_X: number, ARTBOARD_Y: number) {}
}
