import Layer from "modules/layers/Layer";
import { getTextLayerWidth } from "modules/functions/getTextLayerWidth";

export default class TextLayer extends Layer {
  fontFamily: string;
  fontType: { isBold: boolean; isItalic: boolean; isUnderline: boolean };
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
    fontType: { isBold: boolean; isItalic: boolean; isUnderline: boolean },
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

  // 캔버스에 레이어를 그리는 메소드
  draw(ctx: CanvasRenderingContext2D, ARTBOARD_X: number, ARTBOARD_Y: number) {
    ctx.fillStyle = "black";
    ctx.textBaseline = "top";
    ctx.font = `${this.fontType.isBold ? "bold" : ""} ${
      this.fontType.isItalic ? "italic" : ""
    } ${this.fontSize}px ${this.fontFamily}`;
    this.fontType.isUnderline &&
      ctx.fillRect(
        this.x - ARTBOARD_X,
        this.y - ARTBOARD_Y + this.height,
        getTextLayerWidth(this.id),
        1,
      );
    ctx.fillText(this.content, this.x - ARTBOARD_X, this.y - ARTBOARD_Y);
  }
}
