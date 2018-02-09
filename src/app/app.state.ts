import { Todo } from "./shared/model/todo";

export interface AppState {
  readonly todo: Todo[];
}