


const INITIAL_STATE = {
    todo : [
        {
            val: 'Wakeup at 7 am ', 
            edit : false,
        },
        {
            val: 'Wakeup at 6 am ',
            edit : false,
        },
        {
            val: 'Wakeup at 5 am ',
            edit : false,
        },
        
    ],   
}



const todo = (state = INITIAL_STATE , action) =>{

    switch(action.type){
        case 'ADD_TODO':
            console.log('action payload in add todo ' , action.payload);
            var copy_state = [...state.todo];
            copy_state.push({
                val : action.payload,
                edit : false,
            })
            return ({
                ... state ,
                todo : copy_state
            });
        case 'DELETE_TODO':
            var copy_state = [...state.todo];
            copy_state.splice(action.payload , 1 ) ;
            return ({
                ...state , 
                todo : copy_state,
            })
            case 'EDIT_TODO':
                var copy_state = [...state.todo];
                copy_state[action.payload].edit = true;
                console.log('Edit todo item' , copy_state[action.payload]); 
                return ({
                    ...state , 
                    todo : copy_state,
                })
                case 'UPDATE_TODO':
                    console.log(action.payload)
                    var copy_state = [...state.todo];
                    copy_state[action.payload.index].val = action.payload.updatedValue;
                    copy_state[action.payload.index].edit = false;
                    return ({
                        ...state , 
                        todo : copy_state,
                    })
            default:
            return state;
    }
}

export default todo;