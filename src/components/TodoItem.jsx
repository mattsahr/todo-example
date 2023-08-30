import React, { useId } from 'react';

function TodoItem({ todo, handleTodoChecked, handleTodoRemove }) {

    const id = useId();

    return (
        <div className="todo-wrapper">

            <div className="todo-item">

                <input className="form-check-input rounded-1" 
                    type="checkbox"
                    id={`${id}-checkbox`} 
                    checked={todo.completed} 
                    onChange={() => handleTodoChecked(todo.id, !todo.completed)} />
                
                <label htmlFor={`${id}-checkbox`}>
                    <h4 className="m-2" style={{ fontWeight: 'normal' }}>
                        {todo.text}
                    </h4>
                </label>

            </div>

            <button className="close-button"
                onClick={() => handleTodoRemove(todo.id)}>X</button>

        </div>
    );
}

export default TodoItem;
