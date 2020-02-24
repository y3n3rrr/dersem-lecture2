import axios from 'axios'

export const getTodos = () => async (dispatch) => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    debugger
    const { data } = response;
    debugger
    dispatch({ type: "GET_TODOS", payload: data })
}