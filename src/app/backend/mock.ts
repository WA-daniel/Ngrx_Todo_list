import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const mockTodos = [
            {
                idTodo: 1,
                nameTodo: 'test 1',
                descriptionTodo: 'Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum',
                stateTodo: true
            }, {
                idTodo: 2,
                nameTodo: 'test 2',
                descriptionTodo: 'ligendi non quis exercitationem culpa nesciunt nihil aut nostrum',
                stateTodo: true
            },
            {
                idTodo: 3,
                nameTodo: 'test 3',
                descriptionTodo: 'ligendi non quis exercitationem culpa nesciunt nihil aut nostrum',
                stateTodo: true
            },
            {
                idTodo: 4,
                nameTodo: 'test 4',
                descriptionTodo: 'ligendi non quis exercitationem culpa nesciunt nihil aut nostrum',
                stateTodo: true
            },
            {
                idTodo: 5,
                nameTodo: 'test 5',
                descriptionTodo: 'VidTodoeo 0',
                stateTodo: true
            },
        ];
        return {mockTodos};
    }
}
