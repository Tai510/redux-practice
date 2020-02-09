import React from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

const TodoList = ({lineThrough, todo}) => {
    return (
            todo.map(item => {
                return <TodoItem key={item.id} lineThrough={lineThrough} {...item}/>
            })
         );
     
 }

export default TodoList;