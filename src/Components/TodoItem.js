import React from 'react'


const TodoItem = ({todo, onDelete}) => {
  
  const button = {
    padding: '10px 12px',
    backgroundColor: '#d10b31',
    fontSize: '12px'
  }

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger" style={button} onClick={()=>{onDelete(todo)}}>Delete</button>      
    </div>
  )
}

export default TodoItem
