const addTask = (task)=>{
    return {
        type:'ADD_TASK',
        payload:task
    }
}

const deleteTask = (task)=>{
    return {
        type:'DELETE_TASK',
        payload:task
    }
}

const doneTask = (task)=>{
    return {
        type:'DONE_TASK',
        payload:task
    }
}

const editTask = (task)=>{
    return {
        type:'EDIT_TASK',
        payload:task
    }
}

export {addTask,deleteTask,doneTask,editTask};