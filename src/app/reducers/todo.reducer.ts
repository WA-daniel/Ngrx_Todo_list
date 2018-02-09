import {Todo} from "../shared/model/todo";


export function todoReducer(state: Todo[] = [], action) {
    switch (action.type) {
        case 'LOAD_TODOS':
            return state = action.payload;

        case 'TOGGLE_TODO':
            state.map(todo => {
                if (todo.idTodo === action.targetTodo.idTodo) {
                    todo.stateTodo = !action.targetTodo.stateTodo;
                    let todoIndex = state.indexOf(action.targetTodo);
                    if (action.targetTodo.stateTodo !== true) {
                        state = [...state.slice(0, todoIndex), ...state.slice(todoIndex + 1), action.targetTodo];
                    } else {
                        state = [action.targetTodo, ...state.slice(0, todoIndex), ...state.slice(todoIndex + 1)];
                    }
                }
            });
            return state;
    }
}
