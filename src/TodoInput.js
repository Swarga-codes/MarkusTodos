import React from 'react'

function TodoInput() {
  return (
    <div className='todos_input'>
    <div>
    <input type="text" name='title'/>
    </div>
    <div>
    <input type="text" name='description'/>
    </div>
    <div>
    <input type="text" name='isDone'/>
    </div>
    <button>Add Todo</button>
    </div>
  )
}

export default TodoInput