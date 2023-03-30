import React from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { useTodo } from './useTodo';


export const TodoApp = () => {

    const { todos, handleDeletTodo, handleToggleTodo, handleNewTodo} = useTodo();

  return (
   <>
   <h1>TodoApp (10) <small>Pendientes: 2 </small></h1>
   <hr/>

   <div className='row'>
    <div className='col-7'>

      <TodoList 
      todos={todos} 
      onDeleteTodo={ handleDeletTodo }
      onToggleTodo= { handleToggleTodo }
      />

    </div>

    <div className='col-5'>
        <h4>Agregar TODO</h4>
        <hr/>
        <TodoAdd onNewTodo={ handleNewTodo }/>
    </div>
   </div>

   </>
  )
}


