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

  // 캔버스에 레이어를 그리는 메소드
  draw(ctx: CanvasRenderingContext2D, ARTBOARD_X: number, ARTBOARD_Y: number) {}

  // 레이어 타입에 따른 설정 메소드
  setType(
    ctx: CanvasRenderingContext2D,
    ARTBOARD_X: number,
    ARTBOARD_Y: number,
  ) {}
}
