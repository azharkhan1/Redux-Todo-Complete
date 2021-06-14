export const addTodo = (payload)=>{
    return {
        type : 'ADD_TODO',
        payload : payload,
    }
}

export const deleteTodo = (index)=>{
    return {
        type : 'DELETE_TODO',
        payload : index,
    }
}

export const editTodo = (index)=>{
    return {
        type : 'EDIT_TODO',
        payload : index,
    }
}

export const updateTodo = (index , updatedValue)=>{
    return ({
        type: 'UPDATE_TODO',
        payload : {
            updatedValue : updatedValue,
            index : index,
        }
    })
}
