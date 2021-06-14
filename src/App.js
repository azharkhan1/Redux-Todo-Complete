import logo from './logo.svg';
import './App.css';
import {useSelector , useDispatch} from 'react-redux'
import {deleteTodo , addTodo , editTodo , updateTodo } from './actions';
import React from 'react';

function App() {
  const todo = useSelector(state => state.todo);
  const [todoval , setTodoVal ] = React.useState('')
  const [updatedValue , setUpdateValue ] = React.useState('')
  const dispatch = useDispatch();
  console.log('render is running');
  
  const todoValHander = (e)=>{
    setTodoVal(e.target.value)
  }

  const addItem = ()=>{
    dispatch(addTodo(todoval));
    setTodoVal("");
  }

  const updateValueHander = (e)=>{
    setUpdateValue(e.target.value)
  }

  console.log(todo)

  return (
    <div className="App">
      <input value={todoval} placeholder={'Enter todo item'} onChange={todoValHander}/>
      <button onClick={()=>addItem()}>Add Item</button>
      {todo.map((value,index)=>{
              
      return <React.Fragment key={index}>
 
         <li>
         
         {
          value.edit ? 
          
           <React.Fragment>
             <input defaultValue={value.val} onChange={updateValueHander}/>
             <button onClick={()=>dispatch((updateTodo(index,updatedValue)))}>Update</button>
          </React.Fragment> 
          : 
          <React.Fragment>
            {value.val}
         <button onClick={()=>dispatch(deleteTodo(index))}>Delete todo</button>
         <button onClick={()=>dispatch(editTodo(index))}>Edit</button>
            </React.Fragment>
         }
           </li> 
        </React.Fragment>
      })}
  
    </div>
  );
}

export default App;
