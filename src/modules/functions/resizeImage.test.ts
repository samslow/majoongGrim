import { resizeImage } from "modules/functions/resizeImage";

describe("가로형 아트보드 테스트", () => {
  // given
  let img = new Image();
  const shape = "HORIZONTAL_SHAPE";

  it("이미지의 가로,세로가 모두 아트보드 가로,세로보다 작을 때", () => {
    // when
    img.width = 240;
    img.height = 60;
    // then
    expect(resizeImage(img, shape)).toStrictEqual([240, 60]);
  });
  it("이미지의 가로세로 비율이 아트보드의 가로세로 비율보다 클 때", () => {
    // when
    img.width = 600;
    img.height = 100;
    // then
    expect(resizeImage(img, shape)).toStrictEqual([480, 80]);
  });
  it("이미지의 가로세로 비율이 아트보드의 가로세로 비율보다 작을 때", () => {
    // when
    img.width = 600;
    img.height = 1200;
    // then
    expect(resizeImage(img, shape)).toStrictEqual([140, 280]);
  });
});

describe("세로형 아트보드 테스트", () => {
  // given
  let img = new Image();
  const shape = "VERTICAL_SHAPE";

  it("이미지의 가로,세로가 모두 아트보드 가로,세로보다 작을 때", () => {
    // when
    img.width = 240;
    img.height = 60;
    // then
    expect(resizeImage(img, shape)).toStrictEqual([240, 60]);
  });
  it("이미지의 가로세로 비율이 아트보드의 가로세로 비율보다 클 때", () => {
    // when
    img.width = 700;
    img.height = 100;
    // then
    expect(resizeImage(img, shape)).toStrictEqual([280, 40]);
  });
  it("이미지의 가로세로 비율이 아트보드의 가로세로 비율보다 작을 때", () => {
    // when
    img.width = 600;
    img.height = 1200;
    // then
    expect(resizeImage(img, shape)).toStrictEqual([200, 400]);
  });
});
