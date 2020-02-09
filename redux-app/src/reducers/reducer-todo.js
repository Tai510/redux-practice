export default function (state = {
    item: [],
    completed: false,
    id: Date.now(),
}, action) {
    switch (action.type) {
        case 'ADD_ITEM':
        return [
            ...state,
            { item: action.payload, completed: false, id: Date.now()}
          ];
        default:
            return state
    }
}

