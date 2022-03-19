import React from 'react';
import TodoItem from '../Components/TodoItem';

const Todos = (props) => {
  const todoHeading = {
    fontSize: '25px', 
    fontWeight: '600'
  }

  return (
    <div className='container'>
      <h3 className='my-3'style={todoHeading} >Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
              <hr/>
            </>
          )
         })
      }

    </div>
  )
}

export default Todos
