//Redux 
//It is used to create a centralized store for any application

//--Redux cycle 
//- action creater
// -action
// -dispatch
// -reducers
// -state

//--Action in redux 
// action are simple javascript object which consist of type and payload 
// For Example-
const sampleAction = (data) => {
    return {
        type: 'Action type',
        payload: {
            dataRecord: data
        }
    }
}

//--Reducers in redux 
//Reducers are function which take two argument
//first is the old data and second is the action
const claimsHistory = (oldData, action) => {
    if (action.type === 'Create_claim') {
        return [...oldData, action.payload];
    }
    return oldData
}


//Dispatcher 
//Dispatcher is used to dispatch the action to the reducer which further modify the store of the application
const action = sampleAction()
store.dispatch(action)
