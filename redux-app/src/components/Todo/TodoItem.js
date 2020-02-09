import React from 'react';

const TodoItem = ({id, completed, item, lineThrough}) => {
    
    return (
        <div className={`list ${completed}`} onClick={()=> lineThrough(id)}>
            <p>{item}</p>
        </div>
    )
}

export default TodoItem;