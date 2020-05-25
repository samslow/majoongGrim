export const getTextLayerWidth = (id: number) => {
  const textElement = document.getElementById(`text${id}`);
  if (textElement !== null) {
    return textElement.getBoundingClientRect().width;
  } else {
    return 0;
  }
};
