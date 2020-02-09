export const userData = (user) => {
    console.log('You clicked on user:', user.first + ' ' + user.last);
    return {
        type: 'USER_DATA',
        payload: user
    }
}

export const todoData = (todo) => {
    return {
        type: 'ADD_ITEM',
        payload: todo
    }
}


