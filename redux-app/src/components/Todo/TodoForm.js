import React, { useState } from 'react';
import './Todo.css';

const TodoForm = ({ addItem, removeItem/* , todo */ }) => {

    const [item, setItem] = useState('');
    // const [itemcount,setItemCount] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(item);
        setItem('')
    };

    return (
        <div>
            {/* <h3>Item Count: {}</h3> */}
            <form onSubmit={handleSubmit} className='TodoForm'>
                <h2>Redux Todo</h2>
                <div className='todo-input'>
                    <input placeholder='New Item...' type='text' value={item} onChange={(e) => setItem(e.target.value)}></input>
                    <div className='todo-Button'>
                        <button id='add-button' type='submit' value='add item'><i class="fas fa-pen"></i></button>
                        <button id='delete-button' onClick={removeItem}><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;