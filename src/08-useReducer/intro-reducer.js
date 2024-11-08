

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: false,
}];

const todoReducer = (state = initialState, action = {}) =>{ //"action" le dira al todoReducer como quiero que cambie el "state"

    if(action.type === '[TODO] add todo'){
        //state.push(action.payload) NO DEBE HACERSE ESTO
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

//Esto es lo que se agregará
const newTodo = {
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

//Esto es la "action" 
const addTodoAction  = {
  type: '[TODO] add todo',
  payload: newTodo,
}

todos = todoReducer(todos,addTodoAction);

console.log({state: todos})

//NO SE DEBE MUTAR EL ESTADO
/* todos.push({
    id:2,
    todo: 'Recolectar la piedra del poder',
    done: false,
})
 */