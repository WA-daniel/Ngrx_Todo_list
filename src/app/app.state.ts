import { Todo } from "./shared/model/todo";
import { TodoApp } from "./shared/model/todoApp";

export interface AppState {
    readonly app: TodoApp;
    readonly todo: Todo[];
}