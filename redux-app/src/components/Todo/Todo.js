import React, { useState } from 'react';
import TodoForm from '../Todo/TodoForm';
import TodoList from '../Todo/TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoData } from '../../actions';
import './Todo.css';

const Todo = (props) => {

    const [todo, setTodo] = useState([props.todo]);

    const addItem = (item) => {
        setTodo([...todo, { item, id: Date.now(), completed: false }]);
    }

    const lineThrough = (id) => {
        setTodo(todo.map(item => {
            if (item.id === id) {
                return ({ ...item, completed: !item.completed })
            }
            else {
                return item
            }
        }))
    }

    const removeItem = (id) => {
        setTodo(todo.filter(item => item.completed === false))
    }

    return (
        <div className='Todo'>
            <TodoForm todo={todo} addItem={addItem} removeItem={removeItem} />
            <div className='todo-list'>
                <TodoList todo={todo} lineThrough={lineThrough} />
            </div>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ todoData: todoData }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Todo);
