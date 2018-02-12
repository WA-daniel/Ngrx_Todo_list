import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {TodosService} from '../../services/todos.service';
import {AppState} from "../../app.state";
import {Todo} from "../../shared/model/todo";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    todos$: Observable<Todo[]>;

    constructor(private serv: TodosService,
                private store: Store<AppState>) {
        this.todos$ = this.store.select('todo');
    }

    ngOnInit() {
        this.todos$.subscribe(todos => {
            if (!todos) {
                this.getTodos();
            }
        });
    }

    getTodos() {
        this.serv.loadAllTodos().subscribe(todos => {
            this.store.dispatch({
                type: 'LOAD_TODOS',
                payload: todos
            });
        });
    }

}
