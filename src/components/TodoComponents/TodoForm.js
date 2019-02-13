import React from 'react';

const TodoForm = props => {
    return(
        <div>
            <input 
            type={props.text}
            name={props.name}
            handleChanges={props.handleChanges}
            
            >
            </input>
            
            <button onClick='addToDo'>Add To Do</button>
            <button onClick='clear'>Clear completed</button>

        </div>
    )
}


export default TodoForm