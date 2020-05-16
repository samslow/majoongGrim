import ToolboxStore from "stores/ToolboxStore";
import HeaderStore from "stores/HeaderStore";
import LayerStore from "stores/LayerStore";

export default class RootStore {
  ToolboxStore: any;
  HeaderStore: any;
  LayerStore: any;
  constructor() {
    this.ToolboxStore = new ToolboxStore();
    this.HeaderStore = new HeaderStore();
    this.LayerStore = new LayerStore();
  }
}
