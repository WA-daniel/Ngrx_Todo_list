import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Todo} from '../shared/model/todo';

@Injectable()
export class TodosService {
    private todosUrl = 'api/mockTodos';

    constructor(private http: HttpClient) {
    }

    loadAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.todosUrl);
    }
}
