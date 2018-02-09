import {Component, OnInit} from '@angular/core';
import {Todo} from "../../shared/model/todo";
import {AppState} from "../../app.state";
import {Observable} from 'rxjs/Observable';
import {TodosService} from '../../services/todos.service';
import {Store} from "@ngrx/store";

@Component({
    selector: 'app-list-todo',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

    todos$: Observable<Todo[]>;

    constructor(private serv: TodosService,
                private store: Store<AppState>) {
        this.todos$ = this.store.select('todo');
    }

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.serv.loadAllTodos().subscribe(todos => {
            this.store.dispatch({
                type: 'LOAD_TODOS',
                payload: todos
            });
        });
    }

    onSelectTodo(todo) {
        this.store.dispatch({
            type: 'TOGGLE_TODO',
            targetTodo: todo
        });
    }
}
