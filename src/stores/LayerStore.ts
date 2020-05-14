import { observable, action } from "mobx";

export default class LayerStore {
  @observable layers = [];
}
