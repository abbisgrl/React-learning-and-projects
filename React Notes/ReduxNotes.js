//Redux 
//It is used to create a centralized store for any application

//--Redux cycle 
// -action creater-create the action 
// -action
// -dispatch-dispatch the action to the reducer
// -reducers-update the store of the application according to the action 
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

//--Reducers in redux (these are normal javascript function)
//Reducers are function which take two argument
//first is the old data and second is the action
const claimsHistory = (oldData, action) => {
    if (action.type === 'Create_claim') {
        return [...oldData, action.payload];
    }
    return oldData
}

//directly mutating the state is risky because the state will update if the previous state and new state will different but internally redux compare that with === and thats why even after modified directly ,it always same and that why spread operator  is used to create a state with copy of all previous state values so that each time different state will create

//some important points 
//for array state
//1.removing -use filter for that
//2.adding new element - use spread operator 
//3.replacting element - use map for that

//for object state
//4.updating property - use spread operator
//5.adding new property - use spread operator
//6.removing any property - use spread operator and then give the value of the key to undefined


//Dispatcher 
//Dispatcher is used to dispatch the action to the reducer which further modify the store of the application
const action = sampleAction()
store.dispatch(action)


//When we want to create an async action creator then we have to use some type of middleware for that and the famous middleware which is used for that is thunk
//when we used some async action creater then the redux cycle is change
//Dispatcher will give the action to the middleware thunk and thunk will if is an object then thunk will not do any thing and pass to the reducer and if the action is a function then it invoke the function and passing it to reducer

//--Redux cycle for asyncronous action creater
// -action creater-create the action 
// -action
// -dispatch-dispatch the action to the middleware
// -middleware is used to do the asyncronous task 
// -reducers-update the store of the application according to the action 
// -state

//sample code example for thunk
export const fetchPosts = ()=>{
    return async function(dispatch,getState){
        const response =await jsonPlaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response})
    }
};