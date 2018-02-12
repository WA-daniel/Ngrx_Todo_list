import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {Todo} from "../../shared/model/todo";
import {AppState} from "../../app.state";

@Component({
    selector: 'app-add-todo',
    templateUrl: './add-todo.component.html',
    styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
    todos$: Observable<Todo[]>;
    form: FormGroup;

    constructor(private formbuilder: FormBuilder,
                private store: Store<AppState>) {
        this.todos$ = this.store.select('todo');
    }

    ngOnInit() {
        this.form = this.formbuilder.group({
            idTodo: null,
            nameTodo: '',
            descriptionTodo: '',
            stateTodo: null,
        });
    }

    addTodo(todo) {
        this.store.dispatch({
            type: 'ADD_TODO',
            addTodo: todo
        });
        this.form.reset();
    }

}
