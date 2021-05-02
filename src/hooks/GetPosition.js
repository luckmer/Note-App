export const getPosition = (y, x, height, width) => {
  const menuProportion = [220, 300];
  const wallDetect = [80, 60];
  const breakSpace = [260, 190];
  const space = 70;

  const ControlYRadius =
    y + menuProportion[1] + wallDetect[1] >= height ? true : false;
  const ControlXRadius =
    x + menuProportion[0] + wallDetect[0] >= width ? true : false;

  const X = ControlXRadius ? x - breakSpace[1] : x + space;
  const Y = ControlYRadius ? y - breakSpace[0] : y + space;

  return [X, Y, ControlXRadius, ControlYRadius];
};
