import Layer from "modules/layers/Layer";

export default class ImageLayer extends Layer {
  image: HTMLImageElement;

  constructor(
    id: number,
    x: number,
    y: number,
    width: number,
    height: number,
    zIndex: number,
    angleDegree: number,
    image: HTMLImageElement,
  ) {
    super(id, x, y, width, height, zIndex, angleDegree);
    this.image = image;
  }

  move() {
    // 기능 구현
  }

  rotate() {
    // 기능 구현
  }

  // 캔버스에 레이어를 그리는 메소드
  draw(ctx: CanvasRenderingContext2D, ARTBOARD_X: number, ARTBOARD_Y: number) {
    ctx.drawImage(
      this.image,
      0,
      0,
      this.image.width,
      this.image.height,
      this.x - ARTBOARD_X,
      this.y - ARTBOARD_Y,
      this.width,
      this.height,
    );
  }

  // 레이어 타입에 따른 설정 메소드
  setType(
    ctx: CanvasRenderingContext2D,
    ARTBOARD_X: number,
    ARTBOARD_Y: number,
  ) {}
}
