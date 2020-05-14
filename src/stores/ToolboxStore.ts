import { observable } from "mobx";

export default class ToolboxStore {
  @observable selectedTool: string = "텍스트 삽입";
}
