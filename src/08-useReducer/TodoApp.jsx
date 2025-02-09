import { useReducer } from "react"
import { todoReducer } from "./todoReducer"


export const TodoApp = () => {

    const initialState =[
        {
            id: new Date().getTime(),
            description: 'Recolectar la piedra del alma',
            done: false
        },
        {
            id: new Date().getTime() * 100,
            description: 'Recolectar la piedra del tiempo',
            done: false
        },
    ]


    const [todos, dispatch] = useReducer(todoReducer, initialState)

  return (
    <>
        <h1>TodoApp</h1>
        <hr />

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
        </ul>
    </>
  )
}
