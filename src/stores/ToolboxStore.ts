import { observable, action } from "mobx";

export default class ToolboxStore {
  @observable selectedTool = null;
}
