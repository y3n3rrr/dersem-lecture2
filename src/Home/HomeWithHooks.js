import React, { useState, useEffect, useReducer } from 'react'
import { getTodos } from '../actions/actions'


export const reducer = (state, action) => {
    switch (action.payload) {
        case "GET_TODOS":
            debugger
            break;

        default:
            break;
    }
}


export default function HomeWithHooks() {
    const [todos, setTodos] = useState([])
    const asd = useReducer(reducer)
    useEffect(() => {

        getFTodos();
    }, [])

    const getFTodos = async () => {
        await getTodos();
        debugger
    }
    return (
        <div>

        </div>
    )
}
