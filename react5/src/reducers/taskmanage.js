
const taskManage = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'DELETE_TASK':
            return state.filter((item, index) => index !== action.payload)
        case 'DONE_TASK':
            const newState = [...state];
            newState.forEach((item, index) => {
                if (index === action.payload) {
                    item.status = !item.status;
                }
            });
            return newState;
        case 'EDIT_TASK':
            const newState2 = [...state];
            newState2.forEach((item, index) => {
                if (index === action.payload.index) {
                    item.task = action.payload.task;
                    item.date = action.payload.date;
                }
            })
            return newState2;
        default:
            return state;
    }
}

export default taskManage;
