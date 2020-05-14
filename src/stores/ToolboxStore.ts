import { observable } from "mobx";

export default class ToolboxStore {
  @observable selectedTool = null;
}
