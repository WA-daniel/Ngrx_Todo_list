import {Component, OnInit} from '@angular/core';
import {TodosService} from '../../services/todos.service';

@Component({
    selector: 'app-list-todo',
    templateUrl: './list-todo.component.html',
    styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {
    todos$;

    constructor(private serv: TodosService) {
    }

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.todos$ = this.serv.loadAllTodos();
    }
}
