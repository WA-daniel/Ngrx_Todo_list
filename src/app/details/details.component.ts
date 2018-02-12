import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {Todo} from "../shared/model/todo";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    todo: Todo;
    todos$: Observable<Todo[]>;
    todoId: number = null;

    constructor(private route: ActivatedRoute,
                private store: Store<AppState>,
                private router: Router) {
    this.todos$ = this.store.select('todo');
    }

    ngOnInit() {
        this.loadDetails();
    }

    loadDetails() {
        this.todos$.subscribe(todos => {
            const todoId = this.route.snapshot.params.id;
            todos.map(todo => {
                if (todoId == todo.idTodo) {
                    this.todo = todo;
                }
           }) ;
        });

    }

    closed() {
        this.router.navigate(['/home']);
    }


}
