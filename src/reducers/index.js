import { combineReducers } from 'redux'
import Todos from './todos_reducer'
export default combineReducers({
    todos: Todos,
    yener: () => { return "test" }
})