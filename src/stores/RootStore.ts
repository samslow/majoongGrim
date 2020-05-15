import ToolboxStore from "stores/ToolboxStore";
import HeaderStore from "stores/HeaderStore";

export default class RootStore {
  ToolboxStore: any;
  HeaderStore: any;
  constructor() {
    this.ToolboxStore = new ToolboxStore();
    this.HeaderStore = new HeaderStore();
  }
}
