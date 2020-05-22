import Layer from "modules/layers/Layer";

const swapZindex = (layers: Layer[], l1: number, l2: number) => {
  console.log("l1, l2", l1, l2);
  const targetZindex = layers[l1].zIndex;
  const cloneLayers = [...layers];

  cloneLayers[l1].zIndex = cloneLayers[l2].zIndex;
  cloneLayers[l2].zIndex = targetZindex;

  return cloneLayers;
};

export { swapZindex };
