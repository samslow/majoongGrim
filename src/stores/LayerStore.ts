import { observable, action, toJS, autorun } from "mobx";
import ImageLayer from "modules/layers/ImageLayer";

export default class LayerStore {
  @observable layers: ImageLayer[] = [];

  @action setZindex(id: number, type: string) {
    const layerIndex = this.layers.map((layer) => layer.id).indexOf(id);

    if (
      type == "up" &&
      this.layers[layerIndex].zIndex < this.layers[0].zIndex
    ) {
      [this.layers[layerIndex].zIndex, this.layers[layerIndex - 1].zIndex] = [
        this.layers[layerIndex - 1].zIndex,
        this.layers[layerIndex].zIndex,
      ];
      [this.layers[layerIndex], this.layers[layerIndex - 1]] = [
        this.layers[layerIndex - 1],
        this.layers[layerIndex],
      ];
    } else if (
      type == "down" &&
      this.layers[layerIndex].zIndex >
        this.layers[this.layers.length - 1].zIndex
    ) {
      [this.layers[layerIndex].zIndex, this.layers[layerIndex + 1].zIndex] = [
        this.layers[layerIndex + 1].zIndex,
        this.layers[layerIndex].zIndex,
      ];
      [this.layers[layerIndex], this.layers[layerIndex + 1]] = [
        this.layers[layerIndex + 1],
        this.layers[layerIndex],
      ];
    } else {
      console.log(`${id} layer have reach ${type} zIndex limit`);

      return;
    }

    this.layers = [...this.layers];
  }

  @action removeLayer(id: number) {
    const removeIndex = this.layers
      .map((layer) => {
        return layer.id;
      })
      .indexOf(id);
    this.layers.splice(removeIndex, 1);
  }

  constructor() {
    autorun(() => {
      // store 상태가 바뀌면 호출됩니다.
      console.log("현재 레이어: ", toJS(this.layers));
    });
  }
}
