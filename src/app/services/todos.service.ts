import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class TodosService {
    private todosUrl = 'api/mockTodos';

    constructor(private http: HttpClient) {
    }

    loadAllTodos(): Observable<any> {
        return this.http.get(this.todosUrl);
    }
}
