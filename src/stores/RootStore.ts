import ToolboxStore from "./ToolboxStore";

export default class RootStore {
  ToolboxStore: any;
  constructor() {
    this.ToolboxStore = new ToolboxStore();
  }
}
